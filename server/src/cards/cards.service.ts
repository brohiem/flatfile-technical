import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CardEntity } from '../entities/Card'
import { Repository } from 'typeorm'

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(CardEntity)
    private cardsRepository: Repository<CardEntity>
  ) {}

  create({ sectionId, title, description }: { sectionId: number; title: string, description: string }): Promise<CardEntity> {
    let card = new CardEntity()
    card.title = title
    card.description = description
    card.section_id = sectionId
    return this.cardsRepository.save(card)
  }

  async moveCard(card: CardEntity): Promise<CardEntity> {
    await this.cardsRepository.update(card.id, { section_id: card.section_id })
    // Retrieve the updated entity
    return await this.cardsRepository.findOne(card.id);
  }
}

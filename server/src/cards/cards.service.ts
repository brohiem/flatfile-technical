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

  async moveCard(card: CardEntity): Promise<CardEntity> {
    console.log('Moving card:', card, '\n');
    await this.cardsRepository.update(card.id, { section_id: card.section_id })
    // Retrieve the updated entity
    return await this.cardsRepository.findOne(card.id);
  }
}

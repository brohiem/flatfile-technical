import { Body, Controller, Logger, Post } from '@nestjs/common'
import { CardEntity } from '../entities/Card'
import { CardsService } from './cards.service'

@Controller('cards')
export class CardsController {
  private readonly logger = new Logger(CardsController.name)

  constructor(private cardsService: CardsService) {}

  @Post()
  addCard(@Body() card: { sectionId: number; title: string; description: string }): Promise<CardEntity> {
    this.logger.log('POST /cards')
    return this.cardsService.create(card)
  }

  @Post('move')
  moveCard(@Body() card: CardEntity): Promise<CardEntity> {
    this.logger.log('POST /cards/move')
    return this.cardsService.moveCard(card)
  }

}

import React, { useState } from 'react'
import Card from '../card'
import { ICard } from '../../types/card'
import { ISection } from '../../types/section'

import {
  AddCardButtonDiv,
  AddCardButtonSpan,
  CardComposerDiv,
  CardsContainer,
  ListCardComponent,
  ListCardDetails,
  ListCardTextArea,
  SectionHeader,
  SectionTitle,
  SubmitCardButton,
  SubmitCardButtonDiv,
  WrappedSection,
  Wrapper
} from './styled-components'

const Section = ({
  section: { id, title, cards },
  onCardSubmit,
  moveCard
}: {
  section: ISection
  onCardSubmit: Function,
  moveCard: Function
}) => {
  const [isTempCardActive, setIsTempCardActive] = useState(false)
  const [cardText, setCardText] = useState('')

  function handleDrop(event: React.DragEvent<HTMLElement>): void {
    event.preventDefault();
    const cardDataString = event.dataTransfer.getData("application/json");
    const card = JSON.parse(cardDataString);
    delete card.section_title;
    card.section_id = id;
    moveCard(card);
  }
  
  function handleDragOver(event: React.DragEvent<HTMLDivElement>): void {
    event.preventDefault();
  }

  return (
    <Wrapper>
      <WrappedSection onDrop={handleDrop} onDragOver={handleDragOver}>
        <SectionHeader>
          <SectionTitle>{title}</SectionTitle>
        </SectionHeader>
        <CardsContainer>
          {cards.length &&
            cards.map((card: ICard) => {
              return <Card key={card.id} card={card}></Card> // Use the imported 'Card' component
            })}
        </CardsContainer>
        {isTempCardActive ? (
          <CardComposerDiv>
            <ListCardComponent>
              <ListCardDetails>
                <ListCardTextArea
                  placeholder='Enter a title for the new card'
                  onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    setCardText(e.target.value)
                  }
                />
              </ListCardDetails>
            </ListCardComponent>
            <SubmitCardButtonDiv>
              <SubmitCardButton
                type='button'
                value='Add card'
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.preventDefault()

                  if (cardText) {
                    onCardSubmit(id, cardText)
                  }

                  setIsTempCardActive(false)
                }}
              />
            </SubmitCardButtonDiv>
          </CardComposerDiv>
        ) : (
          <AddCardButtonDiv onClick={() => setIsTempCardActive(true)}>
            <AddCardButtonSpan>Add another card</AddCardButtonSpan>
          </AddCardButtonDiv>
        )}
      </WrappedSection>
    </Wrapper>
  )
}

export default Section

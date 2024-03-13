import styled from 'styled-components'
import { useState } from 'react';
import CardDetailsModal from '../modal/CardDetailsModal';

const CardContainer = styled.div`
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
`

const CardTitle = styled.div``

const getTitle = (id: number) => {
  const sectionTitles = ['Backlog', 'Ready for Development', 'In Progress', 'In Review', 'Done'];
  return sectionTitles[id];
}

const Card = ({ card }: any) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(true);
    event.dataTransfer.setData("application/json", JSON.stringify(card));
  };
  
  const handleDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(false);
  };

  const toggleModal = () => { 
    if (!isModalOpen) {
      // get section title from section id if the card is being opened
      card.section_title = getTitle(card.section_id);
    }
    setIsModalOpen(!isModalOpen)
  };
  
  return (
    <>
      <CardContainer
        id={card.id}
        className={`card ${isDragging ? 'dragging' : ''}`}
        draggable={true}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <CardTitle onClick={toggleModal}>
          {card.title}
        </CardTitle>
      </CardContainer>
      <CardDetailsModal
        card={card}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
   </>
  );
};

export default Card;
import React from 'react';
import styled from 'styled-components';
import { ICard } from '../../types/card';
import { getSectionTitle } from '../../App';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;


interface CardDetailsModalProps {
  card: ICard;
  isOpen: boolean;
  onClose: () => void;
}

const CardDetailsModal: React.FC<CardDetailsModalProps> = ({ card, isOpen, onClose }) => {
  if (!isOpen) return null;

  const sectionTitle = getSectionTitle(card.section_id);

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <table style={{ width: '100%', margin: '25px'}}>
          <tbody>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Title:</td>
              <td>{card.title}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Description:</td>
              <td>{card.description}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Section:</td>
              <td>{sectionTitle}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 'bold' }}>Link:</td>
              <td>http://localhost:3000/cards/{card.id}</td>
            </tr>
          </tbody>
        </table>
        <button style={{ marginTop: '10px' }} onClick={onClose}>Close</button>
      </ModalContent>
    </ModalBackdrop>
  );
};


export default CardDetailsModal;

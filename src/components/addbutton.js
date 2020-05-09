import React, { useState } from "react";
import styled from "styled-components";
import iconPlus from "../icons/Icon-Plus-Circle-2px.svg";
import Modal from "styled-react-modal";
import AddToolForm from "./modal"

const AddButton = styled.button.attrs(props => ({}))`
  position: relative;
  background: #0dcb7d 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  align-self: center;
  height: 23px;
  max-width: 40x;
`;

const Icon = styled.img`
  position: absolute;
  max-height: 15px;
  left: 20px;
`;
const Label = styled.span`
  font: Semibold 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
  opacity: 1;
`;

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001A;
  border: 1px solid #EBEAED;
  border-radius: 5px;
  opacity: 1;
`;

const Add = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <AddButton onClick={toggleModal}>
        <Icon src={iconPlus} />
        <Label>Add</Label>
      </AddButton>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <AddToolForm/>
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </>
  );
};

export default Add;

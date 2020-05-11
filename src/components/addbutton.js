import React, { useState } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";
import AddToolForm from "./modal";

const AddButton = styled.button.attrs(props => ({}))`
  position: relative;
  background: #0dcb7d 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  align-self: center;
  height: 23px;
  max-width: 40x;
  outline: none;
`;

const CloseButton = styled(AddButton)`
  background: #f95e5a 0% 0% no-repeat padding-box;
  position: absolute;
  bottom: 1.8em;
  right:7em;
  width: 10.5em;
  height: 4em;
  text-align: center;
  font: Semibold 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
`;

const Label = styled.span`
  font: Semibold 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
  opacity: 1;
`;

const StyledModal = Modal.styled`
  position:relative;
  width: 40em;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001A;
  border: 1px solid #EBEAED;
  border-radius: 5px;
  opacity: 1;
`;

const Add = ({setToolData, toolData}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <AddButton onClick={toggleModal}>
        <Label>Add</Label>
      </AddButton>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <AddToolForm setToolData={setToolData}  toolData={toolData} setIsOpen ={setIsOpen}/>
        <CloseButton onClick={toggleModal}>Close me</CloseButton>
      </StyledModal>
    </>
  );
};

export default Add;

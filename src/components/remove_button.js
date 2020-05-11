import React, { useState } from "react";
import styled from "styled-components";
import Modal from "styled-react-modal";


const RemoveButton = styled.button`
  background: #f95e5a 0% 0% no-repeat padding-box;
  border-radius: 5px;
  opacity: 1;
  position: absolute;
  top: 0;
  right: 0;
  width: 122px;
  height: 23px;
  margin: 5px;
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

const Remove = ({ setToolData, toolData }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <RemoveButton onClick={toggleModal}>
        <Label>Remove</Label>
      </RemoveButton>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>I am a modal!</span>
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </>
  );
};

export default Remove;

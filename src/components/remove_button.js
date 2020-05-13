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
const Warning = styled.h3`
  padding: 6em 0em 4em 0em;
  font: Semibold 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
`;

const ButtonContainer = styled.section`
  display: flex;
  padding: 2em 0em 2em 0em;
  justify-content: space-around;
  width: inherit;
`;

const ButtonCancel = styled.button`
  background: #365df0 0% 0% no-repeat padding-box;
  text-align: center;
  font: Semibold 30px/40px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
  border-radius: 5px;
  width: 122px;
  height: 4em;
  opacity: 1;
  outline: none;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`;

const ButtonAgree = styled(ButtonCancel)`
  background: #f95e5a 0% 0% no-repeat padding-box;
`;
const StyledModal = Modal.styled`
  position:relative;
  width: 40em;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001A;
  border: 1px solid #EBEAED;
  border-radius: 5px;
  opacity: 1;
`;

const Remove = ({ itemTitle, toolId, handleDelete, isOpen , toggleModal , itemToRemove }) => {
    
 
  return (
    <>
      <RemoveButton onClick={()=> toggleModal(itemTitle)}>
        <Label>Remove</Label>
      </RemoveButton>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <Warning>
          {`Are you sure you want to remove ${itemToRemove} ?`}{" "}
        </Warning>
        <ButtonContainer>
          <ButtonCancel onClick={toggleModal}>Cancel</ButtonCancel>
          <ButtonAgree onClick={() => handleDelete(toolId)}>
            Yes , remove !
          </ButtonAgree>
        </ButtonContainer>
      </StyledModal>
    </>
  );
};

export default Remove;

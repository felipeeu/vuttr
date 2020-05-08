import React from "react";
import styled from "styled-components";
import iconPlus from "../icons/Icon-Plus-Circle-2px.svg";

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

const Add = () => {
  return (
    <AddButton>
      <Icon src={iconPlus} />
      <Label>Add</Label>
    </AddButton>
  );
};

export default Add;

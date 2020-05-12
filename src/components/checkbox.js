import React from "react";
import styled from "styled-components";

const Checkbox = styled.input.attrs(props => ({ type: "checkbox" }))`
  align-self: center;
`;
const Label = styled.label`
  font-family: Regular 20px/26px Source Sans Pro;
  font-size: 12px;
  letter-spacing: 0.4px;
  color: #170c3a;
  opacity: 1;
  align-self: center;
  padding-left: 5px;
`;

const Check = ({ setCheckValue }) => {
  return (
    <>
      <Checkbox
        id="checkTag"
        value="selected"
        onChange={e => setCheckValue(e.target.checked)}
      />
      <Label> search in tags Only</Label>
    </>
  );
};

export default Check;

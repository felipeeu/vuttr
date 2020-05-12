import React from "react";
import styled from "styled-components";

const Preloader = styled.span`
  width: 100px;
  height: 100px;
  border: 5px solid #365df0;
  border-color: #365DF0 white white;
  align-self: center;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Label = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #365DF0;
  font: Semibold 42px/50px Source Sans Pro;
  letter-spacing: 0.84px;
`;

const Wrapper = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 35%;
  left: 50%;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Label> LOADING...</Label>
      <Preloader />
    </Wrapper>
  );
};

export default Loader;

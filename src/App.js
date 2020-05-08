import React from "react";
import Search from "./components/search_bar";
import Check from "./components/checkbox";
import Add from "./components/addbutton";
import Card from "./components/card";
import styled from "styled-components";

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #e1e7fd;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
  position: inherit;
  font: Semibold 42px/50px Source Sans Pro;
  letter-spacing: 0.84px;
  color: #170c3a;
  opacity: 1;
`;
const SubTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #6554C0;
  position: inherit;
  font: Semibold 42px/50px Source Sans Pro;
  letter-spacing: 0.84px;
`;

const Container = styled.section`
  background-color: #e1e7fd;
`;
const Label = styled.section`
  text-align: left;
  font-family: Regular 20px/26px Source Sans Pro;
  font-size: 12px;
  letter-spacing: 0.4px;
  color: #170c3a;
  opacity: 1;
`;

const TopWrapper = styled.section`
  display: grid;
  padding-right: 50px;
  padding-left: 50px;
  grid-template-columns: 20% 2% 65% 15%;
`;

const Icon = styled.img`
position:absolute;

`;

function App() {
  return (
    <AppContainer>
      <Title>VUTTR</Title>
      <SubTitle> Very Useful Tools to Remember</SubTitle>
      <Container>
        <TopWrapper>
          <Search/>
          <Check />
          <Label> search in tags only </Label>
          <Add />
        </TopWrapper>
        <Card />
      </Container>
    </AppContainer>
  );
}

export default App;

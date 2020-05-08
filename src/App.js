import React from 'react';
import Search from './components/search_bar'
import Check from './components/checkbox'
import Add from './components/addbutton'
import Card from './components/card'
import styled from 'styled-components'



const AppContainer = styled.section`
  display:flex;
  flex-direction: column;
  background-color: cyan;
  width:100vw;
  height:100vh;

`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
  position:inherit;
`;
const SubTitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: purple;
  position:inherit;
`;

const TopWrapper = styled.section`
    display:flex;
    flex-direction:row;
    align-self: center;
    width: 30em;
    justify-content:space-around;
`;

function App() {
  return (
    <AppContainer>
      <Title>VUTTR</Title>
      <SubTitle> Very Useful Tools to Remember</SubTitle>
      <TopWrapper>
        <Search />
        <Check />
        <Add />
      </TopWrapper>
      <Card/>
    </AppContainer>
  );
}

export default App;

import React, { useState } from "react";
import Search from "./components/search_bar";
import Check from "./components/checkbox";
import Add from "./components/addbutton";
import Loader from "./components/loader";
import styled from "styled-components";
import { ModalProvider } from "styled-react-modal";

const Card = React.lazy(() => import("./components/card"));

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
  color: #6554c0;
  position: inherit;
  font: Semibold 42px/50px Source Sans Pro;
  letter-spacing: 0.84px;
`;

const Container = styled.section`
  background-color: #e1e7fd;
`;

const TopWrapper = styled.section`
  display: grid;
  padding: 20px 50px 20px 50px;
  grid-template-columns: 20% 3% 62% 15%;
`;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [checkValue, setCheckValue] = useState(false);
  const [toolData, setToolData] = useState([]);

  return (
    <ModalProvider>
      <AppContainer>
        <Title>VUTTR</Title>
        <SubTitle> Very Useful Tools to Remember</SubTitle>
        <Container>
          <TopWrapper>
            <Search setInputValue={setInputValue} />
            <Check setCheckValue={setCheckValue} />
            <Add setToolData={setToolData} toolData={toolData} />
          </TopWrapper>
          <React.Suspense fallback={<Loader />}>
            <Card
              inputValue={inputValue}
              checkValue={checkValue}
              toolData={toolData}
              setToolData={setToolData}
            />
          </React.Suspense>
        </Container>
      </AppContainer>
    </ModalProvider>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToolsService from "../services/tools";

const CardNote = styled.section.attrs(props => ({}))`
  align-self: center;
  width: 30em;
  height: 10em;
  background-color: red;
`;

const Title = styled.a.attrs(props => ({}))`
  background-color: purple;
`;

const Description = styled.p.attrs(props => ({}))`
  background-color: green;
`;

const Tags = styled.p.attrs(props => ({}))`
  background-color: yellowgreen;
`;
const RemoveButton = styled.p.attrs(props => ({}))`
  background-color: yellow;
`;

const Card = () => {
  const [toolData, setToolData] = useState([]);

  useEffect(() => {
    const request = ToolsService.getTools();
    request.then(response => setToolData(response.data));
  }, []);

  return (
    toolData &&
    toolData.map(item => (
      <CardNote>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
        {item.tags.map(tag => (
          <Tags>{`# ${tag}`}</Tags>
        ))}
        <RemoveButton>remove</RemoveButton>
      </CardNote>
    ))
  );
};

export default Card;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import closeIcon from "../icons/Icon-Close-Circle-2px.svg";
import ToolsService from "../services/tools";

const CardNote = styled.section`
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  margin: 50px;
  position: relative;
`;

const Title = styled.a`
  position: absolute;
  color: blue;
  padding: 10px;
  text-align: left;
  font: Semibold 30px/36px Source Sans Pro;
  letter-spacing: 0.6px;
  opacity: 1;
`;

const Description = styled.h4`
  top: 30px;
  position: relative;
  padding: 0px 20px 0px 20px;
  text-align: left;
  font: Semibold 26px/32px Source Sans Pro;
  letter-spacing: 0.52px;
  color: #170c3a;
  opacity: 1;
`;

const Tags = styled.h5`
  padding: 20px 20px 0px 20px;
  text-align: left;
  font: Semibold 24px/30px Source Sans Pro;
  letter-spacing: 0.48px;
  color: #170c3a;
  opacity: 1;
`;

const TagsWrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

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

const Icon = styled.img`
  max-height: 15px;
  position: absolute;
  left: 11px;
  top: 3px;
`;

const Label = styled.span`
  font: Semibold 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
  opacity: 1;
`;

const Card = ({inputValue,checkValue}) => {
  const [toolData, setToolData] = useState([]);

  const handleDelete = toolId => {
    setToolData(toolData.filter((tool)=> tool.id !== toolId ))
    // const request = ToolsService.deleteTool(toolId);
    // request.then(response =>  console.log("ID da Tool : ",toolId))
  } 

  useEffect(() => {
    const request = ToolsService.getTools();
    request.then(response => setToolData(response.data));
  }, []);

  useEffect(() => {
    if(checkValue){
      console.log("Value: ",checkValue)
      const request = ToolsService.getToolsByTag(inputValue);
    request.then(response => setToolData(response.data));
    }else{
    const request = ToolsService.filterToolByQuery(inputValue);
    request.then(response => setToolData(response.data));}
  }, [inputValue]);

  return (
    toolData &&
    toolData.map((item, idx) => (
      <CardNote key={idx}>
        <Title href={item.link}>{item.title}</Title>
        <Description>{item.description}</Description>
        <TagsWrapper>
          {item.tags.map((tag, idx) => (
            <Tags key={idx}>{`# ${tag}`}</Tags>
          ))}
        </TagsWrapper>
        <RemoveButton onClick = {()=> handleDelete(item.id)}>
          <Icon src={closeIcon} />
          <Label>Remove</Label>
        </RemoveButton>
      </CardNote>
    ))
  );
};

export default Card;

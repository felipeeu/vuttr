import React, { useEffect, useState} from "react";
import styled from "styled-components";
import ToolsService from "../services/tools";
import Loader from "./loader";
import RemoveButton from "./remove_button";

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

const Card = ({ toolData, setToolData, inputValue, checkValue }) => {
  const [isOpen, setIsOpen] = useState(false);
 
  const handleDelete = toolId => {
    const request = ToolsService.deleteTool(toolId);
    request.then(response =>  {
      if(response.status === 200){
        setToolData(toolData.filter(tool => tool.id !== toolId))
        setIsOpen(false)  
      }
    })
  };

  useEffect(() => {
    const request = ToolsService.getTools();
    request.then(response => setToolData(response.data));
  }, []);

  useEffect(() => {
    if (checkValue) {
      const request = ToolsService.getToolsByTag(inputValue);
      request.then(response => setToolData(response.data));
    } else {
      const request = ToolsService.filterToolByQuery(inputValue);
      request.then(response => setToolData(response.data));
    }
  }, [inputValue]);

  return toolData && toolData.length > 0 ? (
    toolData &&
      toolData.map((item, idx) => (
        <CardNote key={idx}>
          <Title href={item.link}>{item.title}</Title>
          <Description>{item.description}</Description>
          <TagsWrapper>
            {item.tags &&
              item.tags.map((tag, idx) => <Tags key={idx}>{`# ${tag}`}</Tags>)}
          </TagsWrapper>
          <RemoveButton itemToRemove={item.title} toolId={item.id} handleDelete={handleDelete} isOpen= {isOpen} setIsOpen = {setIsOpen} />
        </CardNote>
      ))
  ) : (
    <>
      <Loader />
    </>
  );
};

export default Card;

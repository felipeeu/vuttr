import React from "react";
import styled from "styled-components";

const InputSearch = styled.input.attrs(props => ({
  type: "text",
  placeholder: "search"
}))`
  background: #f5f4f6 0% 0% no-repeat padding-box;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;
  align-self: center;
  height: 20px;
`;

const Search = ({ setInputValue }) => {
  return <InputSearch onChange={e => setInputValue(e.target.value)} />;
};

export default Search;

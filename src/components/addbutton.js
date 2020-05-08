import React from 'react'
import styled from 'styled-components'


const AddButton = styled.button.attrs(props => ({}))`
 align-self:center;
`;

const Add = () => {
  return (
    <AddButton> ADD </AddButton>
  )
}

export default Add
import React from 'react'
import styled from 'styled-components'


const CardNote = styled.section.attrs(props => ({}))`
 align-self:center;
 width: 30em;
 height: 10em;
 background-color:red;
`;

const Card = () => {
  return (
    <CardNote> Notes </CardNote>
  )
}

export default Card
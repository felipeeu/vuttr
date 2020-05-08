import React from 'react'
import styled from 'styled-components'


const Checkbox = styled.input.attrs(props => ({ type: "checkbox" }))`
 align-self:center;
`;

const Check = () => {
  return (
    <Checkbox />
  )
}

export default Check
import React from 'react'
import styled from 'styled-components'

const Button = () => {
  return (
    <div>
        <Btn>Explore Menu</Btn>
    </div>
  )
}

const Btn = styled.button`
  cursor:pointer;
  min-width: 250px;
  height: 60px;
  background: none;
  font-weight:400;
  border: 1px solid white;
  color:  white;
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  &:hover{
      background-color: #CDBE70;
      color:   #0A0A0A;
      border: 1px solid   #0A0A0A;
      transition: 0.4s ease;
}
`

export default Button
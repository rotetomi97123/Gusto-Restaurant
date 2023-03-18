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
    min-width: 200px;
    height: 50px;
    background: none;
    font-weight:400;
    border: 1px solid #CDBE70;
    color:  #CDBE70;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    &:hover{
        color:  white;
        border: 1px solid white;
        transition: 0.2s;
    }
`

export default Button
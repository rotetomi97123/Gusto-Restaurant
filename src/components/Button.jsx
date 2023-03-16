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
    background: none;
    height:30px;
    font-weight:400;
    border:none;
    border-bottom: 1px solid #CDBE70;
    color: white;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    &:hover{
        color:  #CDBE70;
        transition: 0.1s;
    }
`

export default Button
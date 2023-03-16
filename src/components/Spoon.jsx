import React from 'react'
import spoon from '../assets/spoon.svg'
import styled from 'styled-components'

const Spoon = ({text}) => {
  return (
    <div>
        <Text>{text}</Text>
        <img src={spoon} alt="spoon"/>
    </div>
  )
}

const Text = styled.h1`
    color: #F8F8F8;
    font-size: 1.5rem;
    font-weight:400;
`

export default Spoon
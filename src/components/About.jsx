import React from 'react'
import black from '../assets/black.png'
import gold from '../assets/gold.png'
import styled from 'styled-components'

const About = () => {
  return (
   
      <Background>
        <Wrapper>
        <Title>About</Title>
        {/* <img src={gold} alt="gold" /> */}
        <img src={black} alt="black" />
        </Wrapper>
    </Background>
    
  )
}
const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
`
const Background = styled.div`
    position: relative;
    margin-top: 4rem;
    img{
        width: 100%;
        background-repeat: no-repeat;
    }
`
const Title = styled.h1`
    color:#CDBE70;
    font-size: 3rem;
`

export default About
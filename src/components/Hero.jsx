import React from 'react'
import Spoon from './Spoon'
import styled from 'styled-components'
import steak from '../assets/steak.png'
import Button from './Button'

const Hero = () => {
  return (
    <HeroWrapper>
      <div>
        <Spoon text="Chase The New Flavour" />
        <BigText>WHERE EVERY DISH IS <br /> A WORK OF ART</BigText>
        <SampleText>Join us for an unforgettable dining
          experience.<br/> Our menu offers a variety of 
          dishes made with fresh,<br/> high-quality 
          ingredients that are sure to satisfy any
            appetite.
        </SampleText>
        <Button />     
      </div>
      <img src={steak} alt="steak" />
    </HeroWrapper>
  )
}
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height:90vh;
  justify-content:space-around;
  align-items: center;
  @media (max-width: 1450px){
    flex-direction: column;
    justify-content:flex-start;
    margin-top:2rem;
    height:100vh;
  }
  @media (max-width: 900px) {
    height:85vh;
  }
  @media (max-width: 600px){
    padding: 2rem 2rem;
  }
  @media (max-width: 400px){
    padding: 0rem 1rem;
  }
  img {
    max-width: 800px;
    @media (max-width: 900px) {
      max-width: 500px;
    }
    @media (max-width: 550px) {
      max-width: 400px;
      margin-top:1rem;
    }
    @media (max-width: 450px) {
      max-width: 300px;
    }
    @media (max-width: 350px) {
      max-width: 200px;
    }
    @media (max-width: 250px) {
      max-width: 150px;
    }
  }
`
const BigText = styled.h1`
  font-size: 4rem;
  color: #CDBE70;
  min-widht:100px;
  @media (max-width: 900px){
    font-size: 3rem;
  }
`
const SampleText = styled.p`
  font-size: 1.1rem;
  color:white;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`

export default Hero
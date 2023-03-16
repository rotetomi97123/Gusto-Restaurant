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
        <BigText>THE KEY TO <br/>FINE DINING</BigText>
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
  img {
    max-width: 800px;
  }
`
const BigText = styled.h1`
  font-size: 5rem;
  color: #CDBE70;
  min-widht:100px;
`
const SampleText = styled.p`
  font-size: 1.1rem;
  color:white;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

export default Hero
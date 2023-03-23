import React from 'react'
import black from '../assets/black.png'
import gold from '../assets/huge6.png'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper id='about'>
        <Section>
            <p>Welcome to our luxurious steak restaurant,<br /> where we are passionate about providing our guests with a premium dining experience. </p>
        </Section>
        <SectionImg>
            <Image src={gold} alt="gold" />
        </SectionImg>
        <Section>
            <p>Our carefully curated menu features only the finest cuts of beef, sourced from the world's best suppliers, ensuring that every mouthful is a true indulgence.</p>
        </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    background-image: url(${black});
    background-size: cover;
    width: 100%;
    height: 100vh;
    display:flex;
    @media (max-width: 1450px){
        flex-direction: column;
        height: 110vh;
        margin-top:5rem;
    }
`
const Section = styled.div`
    width: 34%;
    height:100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 0rem 2rem;
    font-size: 1.5rem;
    line-height: 2rem;
    @media (max-width: 1450px){
        width: 100%;
        height:34%;
        padding: 2rem 2rem;
    }
    @media (max-width: 400px){
        font-size: 1.2rem;
    }
`
const SectionImg = styled.div`
    width: 34%;
    height:100%;
    @media (max-width: 1450px){
        width: 100%;
        height:34%;
        display: flex;
        justify-content:center;
    }
`
const Image = styled.img`
    width: 600px;
    height: 100%;
    @media (max-width: 1500px){
        width: 500px;
    }
    @media (max-width: 1450px){
        width: 250px;
    }
`

export default About
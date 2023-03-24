import React from 'react'
import black from '../assets/black.png'
import gold from '../assets/huge6.png'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper id='about'>
        <Section1>
            <p>Welcome to our luxurious steak restaurant,<br /> where we are passionate about providing our guests with a premium dining experience. </p>
        </Section1>
        <SectionImg>
            <Image src={gold} alt="gold" />
        </SectionImg>
        <Section2>
            <p>Our carefully curated menu features only the finest cuts of beef, sourced from the world's best suppliers, ensuring that every mouthful is a true indulgence.</p>
        </Section2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
    background-image: url(${black});
    width: 100%;
    height: 100vh;
    display:flex;
    @media (max-width: 1450px){
        flex-direction: column;
        height: 110vh;
        margin-top:5rem;
    }
`
const Section1 = styled.div`
    width: 34%;
    height:100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    padding-left: 5rem;
    font-size: 1.5rem;
    line-height: 2rem;
    @media (max-width: 1450px){
        width:100%;
        text-align:center;
        height:34%;
        padding: 2rem 2rem;
    }
    @media (max-width: 400px){
        font-size: 1.2rem;
    }
`
const Section2 = styled.div`
    width: 34%;
    height:100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    padding-right: 5rem;
    font-size: 1.5rem;
    line-height: 2rem;
    @media (max-width: 1450px){
        width: 100%;
        height:34%;
        padding: 2rem 2rem;
        text-align:center;
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
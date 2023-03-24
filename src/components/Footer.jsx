import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo3.png'
import black from '../assets/black.png'
import Spoon from './Spoon'
import { BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'


const Footer = () => {
  return (
    <Wrapper>
        <Section>
       </Section>
        <Section1>
            <img src={logo} alt="logo" />
            <Paragraph>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.”</Paragraph>
            <Spoon />
            <LogoWrapper>
                <Logo1 />
                <Logo2 />
                <Logo3 />
            </LogoWrapper>
            <Rights>
            2021 Gerícht. All Rights Reserved.
            </Rights>
        </Section1>
        <Section>
          
        </Section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width:100%;
    height:40vh;
    display:flex;
    background: url(${black});
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    background-attachment: fixed;
`
const Rights = styled.p`
    color: grey;
    margin-top:5rem;
`
const Paragraph = styled.p`
    color: white;
    font-size: 1.2rem;
    text-align: center;
    margin: 1rem 0rem;
`
const Logo1 = styled(BsFacebook)`
    color: white;
    font-size: 1.5rem;
    margin-right:1rem;
    cursor: pointer;
    &:hover{
        color: #CDBE70;
    }
`
const Logo2 = styled(BsInstagram)`
    color: white;
    font-size: 1.5rem;
    margin-right:1rem;
    cursor: pointer;
    &:hover{
        color: #CDBE70;
    }
`
const Logo3 = styled(BsLinkedin)`
    color: white;
    font-size: 1.5rem;
    margin-right:1rem;
    cursor: pointer;
    &:hover{
        color: #CDBE70;
    }
    `
const LogoWrapper = styled.div`
    display: flex;
    margin-top: 1rem;
`
const Section1 = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const Section = styled.div`
    width: 30%;
    height: 100%;
`

export default Footer
import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo3.png'
import black from '../assets/black.png'
import Spoon from './Spoon'
import { BsInstagram, BsLinkedin, BsFacebook } from 'react-icons/bs'
import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Footer = () => {

// Animation start
const controls = useAnimation();
const [ref, inView] = useInView({ threshold: 0.2 });

useEffect(() => {
  if (inView) {
    controls.start('visible');
  }
}, [controls, inView]);

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};
// Animation end

  return (
    <div ref={ref}>
    <motion.div animate={controls} initial="hidden" variants={fadeIn}>
    <Wrapper>
        <Section>
            <h3>Contact Us</h3>
            <p>9 W 53rd St, New York, NY 10019, USA <br />
                +1 212-344-1230 +1 212-555-1230</p>
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
            <h3>Working Hours</h3>
            <p>Monday-Friday:<br /> 08:00 Am -12:00 Am
               Saturday-Sunday:<br /> 07:00am -11:00 Pm</p>
        </Section>
    </Wrapper>
    </motion.div>
     </div>
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
    position:relative;
    @media (max-width: 1450px){
        height:100vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Rights = styled.p`
    color: grey;
    margin-top:5rem;
    @media (max-width: 1450px){
    position: absolute;
    bottom: 1rem;
    width: 100%;
    text-align: center;
    }

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
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    h3{
        color: white;
        font-size: 1.5rem;
        padding-bottom:1rem;
    }
    p {
        color:white;
        line-height: 1.5rem;
    }
`

export default Footer
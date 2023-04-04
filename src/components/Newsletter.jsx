import React from 'react'
import styled from 'styled-components'
import Spoon from './Spoon'
import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Newsletter = () => {

    //email
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4eign23', 'template_zshroap', form.current, '6gyiy4jF_EXII9KKF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  //email

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
        <Letter>
        </Letter>
        <LetterBody>
            <Spoon text="Newsletter" />
            <Title>Subscribe to our newsletter!</Title>
            <InputWrapper>
            <form ref={form} onSubmit={sendEmail}>
                <Input placeholder='Type in your email' type="email" name="user_email"></Input>
                <SubmitButton type="submit" value="Send">Subscribe</SubmitButton>
                </form>
            </InputWrapper>
        </LetterBody>
    </Wrapper>
    </motion.div>
     </div>
  )
}
const Wrapper = styled.div`
    width: 100%;
    height: 45vh;
    position: relative;
    @media (max-width: 400px){
        height: 100%;
    }
`
const Letter = styled.div`
    width:100%;
    height:20vh;
    border-top: 2px solid #CDBE70;
    border-bottom: 1px solid #CDBE70;
    box-shadow: 0px 0px 5px 1px #888888;
    background-color:#0A0A0A;
`
const LetterBody = styled.div`
    position: absolute;
    width: 800px;
    border: 2px solid #CDBE70;
    height:300px;
    box-shadow: 0px 0px 5px 1px #888888;
    background-color: #0A0A0A;
    top: 35.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 1000px){
        width: 600px;
    }
    @media (max-width: 700px){
        width:400px;
    }
    @media (max-width: 450px){
        width:275px;
    }
    @media (max-width: 350px){
        width:200px;
    }`
const Title = styled.h1`
    font-size: 2.5rem;
    color: white;
    @media (max-width: 700px){
        font-size: 1.5rem;
    }
    @media (max-width: 450px){
        text-align: center;
    }
`
const InputWrapper = styled.div`
    display:flex;
    width:100%;
    margin-top: 2rem;
    form{
        display:flex;
        width:100%;
        margin-top: 2rem;
        @media (max-width: 700px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`
const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  background-color:#CDBE70;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  width: 100%;
  height: 50px;
  max-width: 400px;
  margin-left: 6.5rem;
  margin-right: 3rem;
  @media (max-width: 1000px){
    margin-left: 1rem;
    margin-right: 1rem;
}
@media (max-width: 700px){
    width: 250px;
}
@media (max-width: 350px){
    width:150px;
}

`;

const SubmitButton = styled.button`
cursor:pointer;
min-width: 150px;
height: 50px;
background: none;
font-weight:400;
border: 1px solid white;
color:  white;
font-size: 1.2rem;
font-family: 'Montserrat', sans-serif;
&:hover{
    background-color: #CDBE70;
    color:   #0A0A0A;
    border: 1px solid   #0A0A0A;
    transition: 0.4s ease;
}
  `
export default Newsletter
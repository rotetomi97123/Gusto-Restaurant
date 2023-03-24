import React from 'react'
import styled from 'styled-components'
import Spoon from './Spoon'

const Newsletter = () => {
  return (
    <Wrapper>
        <Letter>
        </Letter>
        <LetterBody>
            <Spoon text="Newsletter" />
            <Title>Subscribe to our newsletter!</Title>
            <InputWrapper>
                <Input placeholder='Type in your email'></Input>
                <SubmitButton>Subscribe</SubmitButton>
            </InputWrapper>
        </LetterBody>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width: 100%;
    height: 45vh;
    position: relative;
`
const Letter = styled.div`
    width:100%;
    height:20vh;
    border: 1px solid #CDBE70;
    background-color:#0A0A0A;
`
const LetterBody = styled.div`
    position: absolute;
    width: 800px;
    border: 1px solid #CDBE70;
    height:300px;
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
    @media (max-width: 700px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
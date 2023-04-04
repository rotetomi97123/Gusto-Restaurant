import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import styled ,{ keyframes } from 'styled-components'
import logo from '../assets/logo3.png'
import black from '../assets/black.png'
import emailjs from '@emailjs/browser';



const SuccessMessage = styled.div`
  position: fixed;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: green;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  animation: ${keyframes`
    from {opacity: 0; transform: translate(-50%, -40%)}
    to {opacity: 1; transform: translate(-50%, -50%)}
  `} 0.5s ease-in-out;
`;


const BookaTable = () => {

    const [showMessage, setShowMessage] = useState(false);

    function handleClick() {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      }

    //email
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4eign23', 'template_3o68sln', form.current, '6gyiy4jF_EXII9KKF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    //email

  return (
    <Wrapper>
        <Navbar />
        <Form>
            <FormInside>
                <img src={logo} alt="logo" />
                <form ref={form} onSubmit={sendEmail}>
                <InputWrapper>
                <p>Name</p>
                <TransparentInput></TransparentInput>
                </InputWrapper>

                <InputWrapper>
                    <Input placeholder='First Name' type="text" name="user_FirstName"></Input>
                    <Input placeholder='Last Name' type="text" name="user_LastName"></Input>
                </InputWrapper>
                <InputWrapper>
                    <h4>Email</h4>
                    <Input placeholder='Your Email' type="email" name="user_email"></Input>
                </InputWrapper>
                <InputWrapper>
                    <h4>Phone Number</h4>
                    <Input placeholder='(+381) 000-0000' type="number" name="user_number"></Input>
                </InputWrapper>
                <InputWrapper>
                    <h4>Number of guests</h4>
                    <select id="quantity" name="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                    </select>
                </InputWrapper>
                <InputWrapper>
                    <h4>Reservation Date & Time</h4>
                    <Input type="date" id="date" name="date"></Input>
                </InputWrapper>
                <SubmitButton type="submit" value="Send" onClick={handleClick}>Reserve</SubmitButton>
                </form>
                {showMessage && <SuccessMessage>Your reservation was succesfull!</SuccessMessage>}
            </FormInside>
        </Form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
`
const Form = styled.div`
    background-image: url(${black});
    background-size: cover;
    background-position: center;
    background-repeat: repeat;
    background-attachment: fixed;
    width: 100%;
    height:120vh;
    display:flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1200px){
        height:170vh;
        margin-top: 4rem;
    }
    @media (max-width: 400px){
        height:220vh;
    }
`

const InputWrapper = styled.div`
    display:flex;
    width:100%;
    margin-top: 2rem;
    justify-content: center;
    select{
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
    }
        @media (max-width: 700px){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        
    }
`
const FormInside = styled.div`
    width: 70%;
    height:75%;
    background-color: #0A0A0A;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form{
        width: 70%;
        height:75%;
        background-color: #0A0A0A;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        @media (max-width: 700px){
            height:80%;

        }
    }
    p{
        color: white;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        width: 100%;
        height: 50px;
        max-width: 400px;
        margin-left: 6.5rem;
        margin-right: 3rem;
        fontWeight: 'bold'
    }
    h4{
        color: white;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 16px;
        width: 100%;
        height: 50px;
        max-width: 400px;
        margin-left: 6.5rem;
        margin-right: 3rem;
    }
    @media (max-width: 700px){
        height: 90%;
    }
    @media (max-width: 500px){
        width: 90%;
    }
   
`
const TransparentInput = styled.input`
visibility: hidden;
  padding: 10px;
  margin-bottom: 0px;
  border: none;
  background-color:transparent;
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
    display:none;
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
margin-top:1rem;
min-width: 250px;
height: 150px;
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
export default BookaTable
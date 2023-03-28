import React, { useState, useEffect} from 'react';
import black from '../assets/black.png'
import styled from 'styled-components'
import Spoon from '../assets/spoon.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const About = () => {

    const slides = [
        { id: 1, image: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { id: 2, image: 'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80' },
        { id: 3, image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { id: 4, image: 'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80' },
        { id: 5, image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { id: 6, image: 'https://images.unsplash.com/photo-1601001815853-3835274403b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
      ];
      const [options, setOptions] = useState({
        perPage: 1,
        type: "loop",
        pagination: true,
        arrows: false,
        gap: "1rem",
        autoplay: true,
      });
    
  return (
    <Wrapper id='about'>
        <Section1>
            <SpoonDiv>
                <h3>About Us</h3>
                <img src={Spoon} alt="spoon" />
            </SpoonDiv>
            <p>Welcome to our luxurious steak restaurant,<br /> where we are passionate about providing our guests with a premium dining experience. </p>
        </Section1>
        <SectionImg>
            <Splide options={options}>
             {slides.map((images) => {
                return(
                    <SplideSlide id={images.id} key={images.id}>
                        <Card>
                            <Image src={images.image} alt="kep" />
                        </Card>
                    </SplideSlide>
                )
            })};
            </Splide>
        </SectionImg>
        <Section2>
            <SpoonDiv>
                <h3>Our Restaurant</h3>
                <img src={Spoon} alt="spoon" />
            </SpoonDiv>
            <p>Our carefully curated menu features only the finest cuts of beef, sourced from the world's best suppliers, ensuring that every mouthful is a true indulgence.</p>
        </Section2>
    </Wrapper>
  );
};
const Card = styled.div`
width: 35px;
min-height: 50rem;
boder-radius: 2rem;
overflow:hidden;
cursor: pointer;
img{
  border-radius: 1rem;
  position: absolute;
  left:0;
  width:100%;
  height: 100%;
  object-fit: cover;
  &:hover{
      opacity: 70%;
      transition: 0.2s;
  }
}
    @media (max-width: 1450px) {
        min-height: 30rem;
        width: 25px;
    }
    @media (max-width: 450px){
        width: 15px;
    }
    @media (max-width: 350px){
        width: 10px;
    }
  `

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
        height: 140vh;
        margin-top:5rem;
    }
    @media (max-width: 500px){
        height: 160vh;
    }
`
const SpoonDiv = styled.div`
    font-size:3rem;
    color:#CDBE70
`
const Section1 = styled.div`
    width: 34%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    img {
        padding-bottom: 1rem;
    }
    p {
        font-size: 1.4rem;
        line-height: 2rem;
        color: white;
        margin-top: 1rem;
    }
    padding-left: 5rem;
    @media (max-width: 1450px){
        align-items: center;
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
    align-items: flex-end;
    padding-right: 5rem;
    flex-direction: column;
    p {
        font-size: 1.4rem;
        line-height: 2rem;
        color: white;
        margin-top: 1rem;
        text-align: right;
    }
    img {
        padding-bottom: 1rem;
    }
    @media (max-width: 1450px){
        width: 100%;
        height:34%;
        padding: 2rem 2rem;
        text-align:center;
        align-items: center;
    }
    @media (max-width: 400px){
        font-size: 1.2rem;
    }
`
const SectionImg = styled.div`
    width: 34%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1450px){
        width: 100%;
        height:34%;
    }
`
const Image = styled.img`

`

export default About
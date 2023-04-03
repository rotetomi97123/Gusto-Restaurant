import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AiFillInstagram } from 'react-icons/ai'
import Spoon from './Spoon'
import { Cocktails, slides } from './ChefData';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const SliderComponent = () => {

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

    const [options, setOptions] = useState({
        perPage: 4,
        type: 'slide',
        rewind: false,
        pagination: false,
        arrows: false,
        gap: "1rem",
        autoplay: false,
      });
    
      useEffect(() => {
        const updateOptions = () => {
          if (window.innerWidth <= 500) {
            setOptions({
              perPage: 1,
              type: "slide",
              pagination: true,
              arrows: false,
              gap: 0,
              autoplay: true,
            });
          } else {
            setOptions({
              perPage: 4,
              type: "loop",
              pagination: false,
              arrows: false,
              gap: "1rem",
              autoplay: false,
            });
          }
        };
        window.addEventListener("resize", updateOptions);
        updateOptions();
        return () => {
          window.removeEventListener("resize", updateOptions);
        };
      }, []);
      
    return (
      <div ref={ref}>
      <motion.div animate={controls} initial="hidden" variants={fadeIn}>
        <Wrapper id='popular'>
          <TextWrap>
            <Spoon text="Photo Galery" />
            <Title>Our Most Popular Dishes: Tried and True Favorites</Title>
          </TextWrap>
        <Splide options={options}>
        {slides.map((images) => {
            return(
                <SplideSlide id={images.id} key={images.id}>
                     <Card>
                    <p>{images.name}</p>
                    <img src={images.image} alt="kep" />
                    <Insta />
                     </Card>
                     <Gradient />
                </SplideSlide>
            )
        })};
        </Splide>
        <ButtonWrapper>
          <Link to="/Menu">  <Button>Show More</Button></Link>
        </ButtonWrapper>
        <TextWrap>
            <Title>Drink Specials</Title>
          </TextWrap>
        <Splide options={options}>
        {Cocktails.map((images) => {
            return(
                <SplideSlide id={images.id} key={images.id}>
                     <Card>
                    <img src={images.image} alt="kep" />
                    <Insta />
                    <p>{images.name}</p>
                     </Card>
                     <Gradient />
                </SplideSlide>
            )
        })};
        </Splide>
          </Wrapper>
          </motion.div>
     </div>
      );
};

const Wrapper = styled.div`
    padding: 2rem 1rem;

`
const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 1rem;
`
const ButtonWrapper = styled.div`
  width:  100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`
const Button = styled.button`
  cursor:pointer;
  min-width: 250px;
  height: 60px;
  background: none;
  font-weight:400;
  border: 1px solid white;
  color:  white;
  font-size: 1.5rem;
  font-family: 'Montserrat', sans-serif;
  &:hover{
      background-color: #CDBE70;
      color:   #0A0A0A;
      border: 1px solid   #0A0A0A;
      transition: 0.4s ease;
  }
`
const Insta = styled(AiFillInstagram)`
    position: absolute;
    color: #CDBE70;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    opacity:0;
    transition: 0.2s ease;
    pointer-events: none;
`
const Title = styled.h1`
    font-size: 3rem;
    padding-top: 3rem;
    color: #CDBE70;
    text-align: center;
    margin-bottom: 5rem;
    @media (max-width: 600px){
      font-size: 2rem;
    }
`
const Card = styled.div`
  min-height: 26rem;
  boder-radius: 2rem;
  cursor: pointer;
  z-index: 10;
    &:hover ${Insta} {
    opacity: 1;
  }
  &:hover p {
    display: flex;
  }
  }
  p {
    color: white;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1rem;
    display: none;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  img{
    border-radius: 1rem;
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;
    &:hover{
        opacity: 30%;
        transition: 0.2s;
    }
  }
  `
  const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
export default SliderComponent;
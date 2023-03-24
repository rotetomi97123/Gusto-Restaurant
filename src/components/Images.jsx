import React, { useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AiFillInstagram } from 'react-icons/ai'

const slides = [
    { id: 1, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80' },
    { id: 2, image: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80' },
    { id: 3, image: 'https://images.unsplash.com/photo-1609501967126-1a43c02f655c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
    { id: 4, image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1078&q=80' },
    { id: 5, image: 'https://images.unsplash.com/photo-1580959375944-abd7e991f971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80' },
    { id: 6, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80' },
    { id: 7, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=728&q=80' },
    { id: 8, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
    { id: 9, image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80' },
  ];

const SliderComponent = () => {
     const [insta , setInsta] = useState(false)
    return (
        <Wrapper>
            <Title>Our Most Popular Dishes: Tried and True Favorites</Title>
        <Splide options={{
            perPage:4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
           }}>
        {slides.map((images) => {
            return(
                <SplideSlide id={images.id} key={images.id}>
                     <Card onMouseEnter={setInsta(prev=>!prev)}>
                    <img src={images.image} alt="kep" />
                    <Insta style={insta ? 'display:flex' : 'display: none'}  />
                     </Card>
                     <Gradient />
                </SplideSlide>
            )
        })};
        </Splide>
          </Wrapper>
      );
};
const Wrapper = styled.div`
    padding: 0rem 1rem;
`
const Insta = styled(AiFillInstagram)`
    position: absolute;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
`
const Title = styled.h1`
    font-size: 3rem;
    padding-top: 3rem;
    color: #CDBE70;
    text-align: center;
    margin-bottom: 5rem;
`
const Card = styled.div`
  min-height: 25rem;
  boder-radius: 2rem;
  overflow:hidden;
  }
  img{
    border-radius: 1rem;
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;
    &:hover{
        opacity: 50%;
        transition: 0.4s;
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
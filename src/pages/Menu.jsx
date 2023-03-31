import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Menu_appetizer, Menu_MainDish } from '../components/ChefData'
// https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
//https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

const Menu = () => {

 
  return (
    <PageMenu>
        <Navbar />
          <Title>Menu</Title>
          <MenuTextWrapper>
            <img src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="kep1" />
            <MenuText>At our restaurant, our chefs strive to create an exceptional dining experience that is second to none. Our menu is a testament to their culinary skills, featuring a diverse range of dishes that showcase the finest ingredients and flavors from around the world.</MenuText>
            <img src="https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="kep1" />
          </MenuTextWrapper>
        <TitleWrapper>
              <SmallTitle>Appetizers</SmallTitle>
              <Line />
            </TitleWrapper>
        <Splide options={{
            perPage:3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem',
           }}>
              {Menu_appetizer.map((recipe) => {
                return(
                  <SplideSlide id={recipe.id}>
                    <Card>
                        <p>{recipe.name}</p>
                        <h5>{recipe.text}</h5>
                        <img src={recipe.image} alt={recipe.name} />
                    </Card>
                  </SplideSlide>
                )
              })};
            </Splide>
            <TitleWrapper>
              <SmallTitle>Main dishes</SmallTitle>
              <Line />
            </TitleWrapper>
        <Splide options={{
            perPage:3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem',
           }}>
              {Menu_MainDish.map((recipe) => {
                return(
                  <SplideSlide id={recipe.id}>
                    <Card>
                        <p>{recipe.name}</p>
                        <h5>{recipe.text}</h5>
                        <img src={recipe.image} alt={recipe.name} />
                    </Card>
                  </SplideSlide>
                )
              })};
            </Splide>
    </PageMenu>
  )
}
const PageMenu = styled.div`    
  padding: 1rem 2rem;
  background-color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
  padding-bottom: 5rem;
`
const Title = styled.h1`
    text-align:center;
    font-size: 4rem;
    color: #CDBE70;
    min-widht:100px;
    @media (max-width: 900px){
        font-size: 3rem;
    }
`
const MenuTextWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      max-height: 600px;
      object-fit: cover;
      border-radius: 1rem;
      margin: 0 1rem;
    }
`
const MenuText = styled.p`
    color: white;
    font-size: 1.2rem;
    letter-spacing: 2px;
    text-align: center;
    max-width: 550px;
    align-self: center;
    line-height: 3.5rem;
`
const TitleWrapper = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Line = styled.div`
  border-top: 2px solid #CDBE70;
  width: 200px;
  margin-top: 5px;
  box-shadow: 0px 0px 5px 1px #888888;
`
const SmallTitle = styled.h1`
    text-align:center;
    font-size: 2rem;
    color: #CDBE70;
    min-widht:100px;
    margin-top:2rem;
    @media (max-width: 900px){
        font-size: 3rem;
    }
`
const Card = styled.div`
  margin-top: 3rem;
  min-height: 30rem;
  position:relative;
  img{
    border-radius: 3rem;
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    z-index: 10;
    color:white;
    width:100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
  }
  h5 {
    color:white;
    font-size: 1rem;
    text-align: center;
    margin:2rem 0rem;
    font-weight: 400;  }
`;


export default Menu
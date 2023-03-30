import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

const Menu = () => {

    const [ Menu, setMenu ] = useState([])

    useEffect (() => {
        getMenu();
      },[])

    const getMenu = async () => {
        const check = localStorage.getItem('Menu');
        
        if(check){
          setPopular(JSON.parse(check))
        }else{
          const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=6b64eae1553c44b2ac17576e4aa1ca47&number=9`);
          const data = await api.json();
    
          localStorage.setItem("popular", JSON.stringify(data.recipes));
          setMenu(data.recipes);
        };
    
      }
    
  return (
    <PageMenu>
        <Navbar />
        <Title>Welcome to our Menu</Title>
        <Splide options={{
            perPage:3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem',
           }}>
              {Menu.map((recipe) => {
                return(
                  <SplideSlide id={recipe.id}>
                    <Card>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                    </Card>
                  </SplideSlide>
                )
              })};
            </Splide>
            <Splide options={{
            perPage:3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3rem',
           }}>
              {Menu.map((recipe) => {
                return(
                  <SplideSlide id={recipe.id}>
                    <Card>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                    </Card>
                  </SplideSlide>
                )
              })};
            </Splide>
    </PageMenu>
  )
}
const PageMenu = styled.div`    
  padding: 1rem 1rem;
  background-color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
`
const Title = styled.h1`
    text-align:center;
    font-size: 4rem;
    color: #CDBE70;
    min-widht:100px;
    margin-top:2rem;
    @media (max-width: 900px){
        font-size: 3rem;
    }
`
const Card = styled.div`
  margin-top: 3rem;
  min-height: 25rem;
  boder-radius: 2rem;
  overflow:hidden;
  position:relative;
  &:hover {
    opacity: 75%;
  }

  img{
    border-radius: 1rem;
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index: 10;
    left:50%;
    bottom: 0%;
    transform: translate(-50%,0%);
    color:white;
    width:100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    height:40%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
`;


export default Menu
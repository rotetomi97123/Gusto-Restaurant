import React, { useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Menu_appetizer, Menu_MainDish , Menu_Dessert, Menu_Drinks } from '../components/ChefData'
import { Link , useLocation} from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80
//https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80

const MainDish = () => {

  const [menu, setMenu] = useState(Menu_appetizer)
  const [ title , setTitle ] = useState("Appertizer")
  const location = useLocation()
  const { name } = location.state

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
    perPage: 3,
    type: 'slide',
    rewind: false,
    pagination: false,
    arrows: false,
    gap: "1rem",
    autoplay: false,
  });

  useEffect(() => {
    const updateOptions = () => {
      if (window.innerWidth <= 1200) {
        setOptions({
          perPage: 1,
          type: "slide",
          pagination: true,
          arrows: false,
          gap: "1rem",
          autoplay: true,
        });
      } else {
        setOptions({
          perPage: 3,
          type: "loop",
          pagination: false,
          arrows: false,
          gap: "2rem",
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
    <PageMenu>
        <Navbar />
        <div ref={ref}>
    <motion.div animate={controls} initial="hidden" variants={fadeIn}>
       <ButtonWrapper>
          <TitleLink to="/Menu"><Title>Menu</Title></TitleLink>
       </ButtonWrapper>
          <ButtonWrapper>
            <Link to="/MainDish" state={{ name: "Menu_appetizer" }} onClick={()=>{setMenu(Menu_appetizer); setTitle("Appertizer")}}><Btn>Appetizers</Btn> </Link>
            <Link to="/MainDish" state={{ name: "Menu_MainDish" }}  onClick={()=>{ setMenu(Menu_MainDish); setTitle("MainDish")}}><Btn>MainDish</Btn> </Link>
            <Link to="/MainDish" state={{ name: "Menu_Dessert" }}   onClick={()=>{setMenu(Menu_Dessert); setTitle("Dessert")}}><Btn>Dessert</Btn> </Link>
            <Link to="/MainDish" state={{ name: "Menu_Drinks" }}    onClick={()=>{setMenu(Menu_Drinks); setTitle("Drinks")}}><Btn>Drinks</Btn> </Link>
          </ButtonWrapper>
          <TitleWrapper>
              <SmallTitle>{title}</SmallTitle>
              <Line />
            </TitleWrapper>
            <Splide options={options}>
              {menu.map((recipe) => {
                return(
                  <SplideSlide id={recipe.id}>
                    <Card>
                        <p>{recipe.name}</p>
                        <h5>{recipe.text}</h5>
                        <h2>${recipe.price}</h2>
                        <ImageWrapper>
                          <img src={recipe.image} alt={recipe.name} />
                        </ImageWrapper>
                    </Card>
                  </SplideSlide>
                )
              })};
            </Splide>
            </motion.div>
     </div>
    </PageMenu>
  )
}

const PageMenu = styled.div`    
  padding: 1rem 2rem;
  background-color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
`

const TitleLink = styled(Link)`
    text-decoration: none;
    `
const Title = styled.h1`
    text-align:center;
    font-size: 4rem;
    color: #CDBE70;
    padding-bottom: 1rem;
    Link {
        text-decoration: none;
    }
    @media (max-width: 1200px){
      margin-top: 2rem;
    }
    @media (max-width: 900px){
        font-size: 3rem;
    }
    @media (max-width: 400px){
      margin-top: 5rem;

    }
`
const Line = styled.div`
  border-top: 2px solid #CDBE70;
  width: 230px;
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
const ButtonWrapper = styled.div`
  width: 100%;
  height: 100px;
  display:flex;
  justify-content:center;
  align-items: center;
  @media (max-width: 1200px){
    flex-direction: column;
    height: 100%;
  }
  
`
const Btn = styled.button`
  cursor:pointer;
  margin-right: 1.5rem;
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
@media (max-width: 1200px){
  margin-bottom: 1rem;
  margin-right: 0rem;
}
`
const TitleWrapper = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const ImageWrapper = styled.div`
    max-width:600px;
    height:400px;
    overflow:hidden;
    position:relative;
    object-fit: cover;
`
const Card = styled.div`
  margin-top: 3rem;
  min-height: 40rem;
  &:hover{
    cursor: grab;
  }
  img{
    border-radius: 3rem;
    width:100%;
    height: 100%;
    object-fit: cover;
    &:hover{
      opacity:75%;
    }
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
    h2 {
      color:white;
      font-size: 1.5rem;
      text-align: center;
      margin:2rem 0rem;
      font-weight: 400;  
    }
    @media (max-width: 1200px){
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction: column;
      min-height: 30rem;
    }
`;

export default MainDish
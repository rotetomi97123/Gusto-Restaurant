import React, { useEffect, useState , useRef} from 'react'
import Navbar from '../components/Navbar'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Menu = () => {

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
  visible: { opacity: 1, transition: { duration: 1.2 } }
};
// Animation end




// Slider start
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
 
// Slider End

  return (
    <PageMenu>
    <div ref={ref}>
    <motion.div animate={controls} initial="hidden" variants={fadeIn}>
        <Navbar />
          <Title>About our Menu</Title>
          <ButtonWrapper>
            <Link to="/MainDish" state={{ name: "Menu_appetizer" }}><Btn>Show Menu</Btn> </Link>
          </ButtonWrapper>
          <MenuTextWrapper>
            <img src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="kep1" />
            <MenuText>At our restaurant, our chefs strive to create an exceptional dining experience that is second to none. Our menu is a testament to their culinary skills, featuring a diverse range of dishes that showcase the finest ingredients and flavors from around the world.</MenuText>
            <img src="https://images.unsplash.com/photo-1654922207993-2952fec328ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="kep1" />
          </MenuTextWrapper>
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
  padding-bottom: 5rem;
  height:100vh;
`
const Title = styled.h1`  
    text-align:center;
    font-size: 4rem;
    color: #CDBE70;
    min-widht:100px;
    @media (max-width: 1200px){
      margin-top: 2rem;
      margin-bottom:1rem;
    }
    @media (max-width: 900px){
        font-size: 3rem;
    }
    @media (max-width: 400px){
      margin-top: 5rem;

    }
`
const MenuTextWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      max-height: 550px;
      object-fit: cover;
      border-radius: 1rem;
      margin: 0 1rem;
      @media (max-width: 400px){
        max-height: 350px;

      }
    }
    @media (max-width: 1200px){
      flex-direction: column;
      margin-top: 1rem;
  }
`
const MenuText = styled.p`
    margin-bottom: 3rem;
    color: white;
    font-size: 1.2rem;
    letter-spacing: 2px;
    text-align: center;
    max-width: 550px;
    align-self: center;
    line-height: 3.5rem;
    @media (max-width: 400px){
      line-height: 2.5rem;
      margin-top: 1rem;
    }
`

const ButtonWrapper = styled.div`
  width: 100%;
  height: 150px;
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
  margin-right: 0rem;
  margin-bottom: 1rem;
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
  img{
    border-radius: 3rem;
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
    h2 {
      color:white;
      font-size: 1.5rem;
      text-align: center;
      margin:2rem 0rem;
      font-weight: 400;  
    }
`;


export default Menu
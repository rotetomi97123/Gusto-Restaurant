import Spoon from './Spoon'
import styled from 'styled-components'
import steak from '../assets/steak22.png'
import Button from './Button'
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.3 } }
  };
  return (
        <div ref={ref}>
      <motion.div animate={controls} initial="hidden" variants={fadeIn}>
    <HeroWrapper>
        
      <div>
        <Spoon text="Chase The New Flavour" />
        <BigText>WHERE EVERY DISH IS <br /> A WORK OF ART</BigText>

        <SampleText>Join us for an unforgettable dining
          experience.<br/> Our menu offers a variety of 
          dishes made with fresh,<br/> high-quality 
          ingredients that are sure to satisfy any
            appetite.
        </SampleText>
        <Link to="/Menu"> <Button /></Link>
      </div>
      <img src={steak} alt="steak" />
    </HeroWrapper>
      </motion.div>
    </div>
  )
}
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height:90vh;
  justify-content:space-around;
  align-items: center;
  @media (max-width: 1450px){
    flex-direction: column;
    justify-content:flex-start;
    margin-top:2rem;
    height:100vh;
  }
  @media (max-width: 900px) {
    height:85vh;
  }
  @media (max-width: 600px){
    padding: 2rem 2rem;
  }
  @media (max-width: 400px){
    padding: 0rem 1rem;
    height:120vh;
    margin-top:5rem;
  }

  img {
    max-width: 800px;
    @media (max-width: 900px) {
      max-width: 500px;
    }
    @media (max-width: 550px) {
      max-width: 400px;
      margin-top:1rem;
    }
    @media (max-width: 450px) {
      max-width: 300px;
    }
    @media (max-width: 350px) {
      max-width: 200px;
    }
    @media (max-width: 250px) {
      max-width: 150px;
    }
  }
`
const BigText = styled.h1`
  font-size: 4rem;
  color: #CDBE70;
  min-widht:100px;
  @media (max-width: 900px){
    font-size: 3rem;
  }
`
const SampleText = styled.p`
  font-size: 1.1rem;
  color:white;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`

export default Hero
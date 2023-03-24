import React, { useState, useEffect } from 'react'
import logo from '../assets/logo3.png'
import styled from 'styled-components'
import {  RxHamburgerMenu } from 'react-icons/rx'
import { motion, AnimatePresence  } from 'framer-motion';
import { GiKnifeFork } from 'react-icons/gi'


const Navbar = () => {

    const [active , setActive] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 1200){
                setActive(false);
            }else{ 
            }
        };
        window.addEventListener('resize', handleResize);
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <NavWrapper>
        <img src={logo} alt="logo"  />
        <Ulwrapper>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#popular">Popular</a></li>
            <li><a href="#chefscorner">Chef's Corner</a></li>
        </Ulwrapper>
        <LogInWrapper>
            <h2>Log In / Register</h2>
            <Line>|</Line>
            <h2>Book Table</h2>
        </LogInWrapper>
        <HamburgerMenu onClick={() => {setActive(!active)}}>
            {active ? <GiKnifeFork />  : <RxHamburgerMenu /> }
        </HamburgerMenu>
        <div>
            <AnimatePresence>
            {active &&<MobileUl
                variants={menuVariants}
                initial="closed"
                animate={active ? 'open' : 'closed'}
                exit="exit"
                >
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#popular">Popular</a></li>
                <li><a href="#chefscorner">Chef's Corner</a></li>
                <LogInWrapperMobil>
                    <h2>Log In / Register</h2>
                    <h2>Book Table</h2>
                </LogInWrapperMobil>
            </MobileUl>}
            </AnimatePresence>
        </div>
    </NavWrapper>
  )
}



const menuVariants = {
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
        damping: 10
      }
    },
    closed: {
      x: '100%',
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
        damping: 10
      }
    },
    exit: {
        x: '150%',
        transition: {
          duration: 0.5,
          type: 'spring',
          stiffness: 120,
          damping: 10
        }
      }
  };

  
const NavWrapper = styled.div`
    display: flex;
    height: 10vh;
    position: relative;
    justify-content: space-between;
img {
    padding: 1rem 10rem 1rem 10rem;
    cursor: pointer;
}
@media (max-width: 1300px) {
    img {
        padding: 1rem 5rem 1rem 5rem;
    }
}
@media (max-width: 450px){
    img {
        padding: 1rem 1rem 1rem 1rem;
    }
}
`
const Ulwrapper = styled.ul`
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.2rem;
    list-style-type: none;
    li {
        a{
            color: white;
            margin-right: 1.5rem;
            cursor: pointer;
            text-decoration: none;
            &:hover {
                color: #CDBE70;
                transition: 0.4s;
            }
        }
    }
    @media (max-width: 1200px) {
        display:none;
    }
`
const MobileUl = styled(motion.ul)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 200px;
    background-color:#CDBE70;
    border-radius: 20px ;
    position: absolute;
    list-style-type: none;
    top:100px;
    right: 50px;
    li {
        margin-bottom: 1rem;
    }
    li a{
        cursor: pointer;
        margin-bottom: 2rem;
        color: white;
        font-size: 1.5rem;
        font-weight:600;
        margin-bottom: 2rem;
        list-style-type: none;
        text-decoration: none;
        &:hover {
            color: #0A0A0A;
            transition: 0.4s;
        }
    }
    @media (max-width: 800px){
        height: 350px;
    }
`
const LogInWrapper = styled.div`
    display: flex;
    align-items: center;
    color: white;
    margin-left: 0rem;
    border-bottom: 1px solid transparent;
    h2 {
        font-size: 1rem;
        margin-right: 1rem;
        cursor: pointer;
        &:hover {
            border-bottom: 1px solid #CDBE70;
            transition: 0.4s;
        }
    @media (max-width: 800px){
        display: none;
    }
    }
`
const LogInWrapperMobil = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    color: white;
    @media (max-width: 800px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        cursor: pointer;
        &:hover {
            color: #0A0A0A;
            transition: 0.4s;
        }
        @media (max-width: 800px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`
const Line = styled.div`
    margin-right: 1rem;
    font-size: 1.2rem;
    color:#CDBE70;
    @media (max-width: 800px){
        display: none;
    }
`
const HamburgerMenu = styled.div`
    display: none;
    color: white;
    align-items: center;
    margin-right:1rem;
    font-size: 2rem;
    cursor: pointer;
    @media (max-width: 1200px) {
        display:flex;
        &:hover {
            color: #CDBE70;
            transition: 0.4s;
        }
    }
`
export default Navbar
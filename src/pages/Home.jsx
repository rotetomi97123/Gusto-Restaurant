import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import styled from 'styled-components'
import About from '../components/About'
import Serving from '../components/Serving'
import SliderComponent from '../components/Images'
import ChefsCorner from '../components/ChefsCorner'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import black from '../assets/black.png'

const Home = () => {
  return (
    <div>
      <PageHome>
        <Navbar />
        <Hero />
        <About />
        <Serving />
        <SliderComponent />
        <ChefsCorner />
        <BG>
          <Newsletter />
          <Footer />
       </BG>
      </PageHome>
    </div>
  )
}
const PageHome = styled.div`
  background-color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
`
const BG = styled.div`
  background: url(${black});
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
`
export default Home
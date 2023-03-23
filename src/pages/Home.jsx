import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import styled from 'styled-components'
import About from '../components/About'

const Home = () => {
  return (
    <div>
      <PageHome>
        <Navbar />
        <Hero />
        <About />
      </PageHome>
    </div>
  )
}
const PageHome = styled.div`
  height: 500vh;
  background-color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
`
export default Home
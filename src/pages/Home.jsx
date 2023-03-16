import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import styled from 'styled-components'

const Home = () => {
  return (
    <div>
      <PageHome>
        <Navbar />
        <Hero />
      </PageHome>
    </div>
  )
}
const PageHome = styled.div`
  height: 100vh;
  background-color: #0A0A0A;
  font-family: 'Montserrat', sans-serif;
`
export default Home
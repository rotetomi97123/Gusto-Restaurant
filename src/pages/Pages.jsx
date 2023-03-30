import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
    </Routes>
  )
}

export default Pages
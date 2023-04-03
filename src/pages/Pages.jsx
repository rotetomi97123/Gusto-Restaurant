import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import MainDish from './MainDish'


const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/MainDish' element={<MainDish />} />
    </Routes>
  )
}

export default Pages
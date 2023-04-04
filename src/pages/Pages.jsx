import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import MainDish from './MainDish'
import BookaTable from './BookaTable'

const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/MainDish' element={<MainDish />} />
        <Route path='/BookaTable' element={<BookaTable />} />
    </Routes>
  )
}

export default Pages
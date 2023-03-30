import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
  } from "react-router-dom";
import Menu from './Menu'
  

const Routing = () => {
  return (
    <Routes>
      <Route path="/Menu" element={<Menu />} />
    </Routes>
  )
}

export default Routing
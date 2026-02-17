import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import LayOut from './LayOut'
import SideBar from './components/SideBar/SideBar'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LayOut/>}/>
      </Routes>
      <SideBar/>
      </div>
  )
}

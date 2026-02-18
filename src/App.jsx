import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import LayOut from './LayOut'
import AddItems from './components/SideBar/1Items/Items/AddItems'
import ItemsList from './components/SideBar/1Items/Items/ItemsList'

export default function App() {
  return (
    <div>
  
      <Routes>
      
        <Route path='/' element={<LayOut/>}>

        {/* Items  */}
        <Route path ='inventory/items/new' element={<AddItems/>}/>
        <Route path='inventory/items' element={<ItemsList/>}/>
        </Route>
      </Routes>
      
      </div>
  )
}

import React, { useState } from 'react'
import Recent from '../../Icons/history.png'
import Arrow from '../../Icons/down-arrow.png'
import Search from '../../Icons/search.png'
import Refer from '../../Icons/connection.png'
import Add from '../../Icons/add-button.png'
import Notification from '../../Icons/notification.png'
import Setting from '../../Icons/setting.png'
import User from '../../Icons/user.png'
import Menu from '../../Icons/dots-menu.png'

export default function Navbar() {

  const [down,setDown]=useState(false)
  const option=["1","2","3","4","5"];0

  const handleOption=()=>{
      
  }

  return (
    <div className='flex justify-between items-center bg-gray-200' >
      {/* Recent active and Search bar*/}
      <div className='flex items-center gap-4 p-4 relative '>
        <img src={Recent} alt="recent" className='w-6 h-6 '/>
       <div className='flex items-center gap-4 rounded-lg  p-2 bg-gray-300 border border-white  hover:border-blue-600'>
        <img src={Search} alt="" className='w-4 h-4' />
        <img src={Arrow} alt=""  className='w-4 h-4' onClick={()=>setDown(!down)}/>
         <select className='absolute mt-12 ml-4 w-64 bg-white hover:bg-blue-500 ' >
            {
              option.map((index,item)=>(
                <option key={index} className='p-2 overflow-y-auto
                 hover:bg-blue-500 cursor-pointer '>{item}</option>
              ))
            }
          </select> 
         <input type="text" name="" id="" className='w-32 h-4 outline-none focus:outline-none hover:w-64  focus:w-64'/>
       </div>
      </div>

      {/* Rigth side*/}
      <div className='flex justify-between gap-8 items-center'>
        <p>This is a Test Organization</p>
        <div className='flex justify-between items-center gap-2'>
          <p>Demo Org</p>
          <img src={Arrow} alt=""  className='w-6 h-6' />
        </div>
          <img src={Add} alt=""  className='w-12 h-12'/>
          <img src={Refer} alt=""  className='w-6 h-6'/>  
          <img src={Notification} alt="" className='w-6 h-6' />
          <img src={Setting} alt=""  className='w-6 h-6'/>
          <img src={User} alt="" className='w-6 h-6' />
          <img src={Menu} alt="" className='w-6 h-6' />
        </div> 
    </div>
  )
}

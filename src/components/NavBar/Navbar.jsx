import React, { useState } from 'react'
import Recent from '../../Icons/NavIcons/history.png'
import Arrow from '../../Icons/NavIcons/down-arrow.png'
import Search from '../../Icons/NavIcons/search.png'
import Refer from '../../Icons/NavIcons/connection.png'
import Add from '../../Icons/NavIcons/add-button.png'
import Notification from '../../Icons/NavIcons/notification.png'
import Setting from '../../Icons/NavIcons/setting.png'
import User from '../../Icons/NavIcons/user.png'
import Menu from '../../Icons/NavIcons/dots-menu.png'

export default function Navbar() {

  const [down,setDown]=useState(false)
  const [select,setSelect]=useState(null);
  const [addItem,setAddItem]=useState(false);
  const option=["1","2","3","4","5","6","7","8"];
  const general=["Add User","Item","Item Groups","Composite Items"]
  const inventory=["Inventory Adjustments","packages","Shipment"]
  const sales=["Customer","Delivery Challan","Invoices","Retainer Invoices","Sales Order","Customer Payment","Credit Notes"]
  const purchases=["Ventor","Bill","Purchase order","Purchase Receive","Vendor Payment","Vendor Credit"]

  const handleOption=(item)=>{

        setSelect(item)

  }

  return (
    <div className='flex justify-between items-center bg-gray-200 ' >
      {/* Recent active and Search bar*/}
      <div className='flex items-center gap-4 p-4 relative '>
        <img src={Recent} alt="recent" className='w-6 h-6 '/>
       <div className='flex items-center gap-4 rounded-lg  p-2 bg-gray-300 border border-white  hover:border-blue-600'>
        <img src={Search} alt="" className='w-4 h-4' />
        <img src={Arrow} alt=""  className='w-4 h-4' onClick={()=>setDown(!down)}/>
            { down && <div className='absolute  bg-white top-16 w-64 
            p-2 rounded-lg shadow-2xl
             '>
            <div className='overflow-y-auto  w-64 h-64'>
            { 
              option.map((index,item)=>(
                <div key={index} className='hover:bg-blue-500 rounded-lg m-2  ' onClick={()=>handleOption(item)}>
                <h4  className={`${select==item?"bg-blue-400 rounded-sm  text-white":"bg-white"} p-2 hover:bg-gray-400 hover:rounded-sm`}  >{item}</h4>
                 </div>
              ))
            }
            </div>
            <div >
            <h4 className='p-2 hover:bg-gray-500 hover:text-white rounded-lg cursor-pointer'>Advanced Search</h4>
            <h4 className='p-2 hover:bg-gray-500 hover:text-white rounded-lg cursor-pointer'>Search across Zoho</h4>
            </div> 
        </div>}
         <input type="text" name="" id="" className='w-32 h-4 outline-none focus:outline-none hover:w-64  focus:w-64'/>
       </div>
      </div>

      {/* Rigth side*/}
      <div className='flex justify-between gap-8 items-center relative'>
        <p>This is a Test Organization</p>
        <div className='flex justify-between items-center gap-2'>
          <p>Demo Org</p>
          <img src={Arrow} alt=""  className='w-6 h-6' />
        </div>
          <img src={Add} alt=""  className='w-12 h-12 ' onClick={()=>setAddItem(!addItem)} />

              {addItem &&<div className='absolute w-4xl  bg-white right-1 top-16 p-2 rounded-sm shadow-2xl flex justify-center  '>
                <div>
                  <div className='flex items-center gap-2 p-2'>
                  <img src={Menu} alt="" className='w-4 h-4' />
                  <h3>General</h3>
                  </div>
                  <div>{
                    general.map((item,index)=>(
                      <div key={index} className='flex  items-center gap-2 py-2 px-6'>
                        <img src={Add} alt=""  className='w-4 h-4' />
                        <p className='hover:underline decoration-2  decoration-blue-500  cursor-pointer'>{item}</p>
                      </div>
                    ))
                    }</div>
                </div>

                <div>
                  <div className='flex items-center gap-2 p-2'>
                  <img src={Menu} alt="" className='w-4 h-4' />
                  <h3>Inventory</h3>
                  </div>
                  <div>{
                    inventory.map((item,index)=>(
                      <div key={index} className='flex  items-center gap-2 py-2 px-6'>
                        <img src={Add} alt=""  className='w-4 h-4' />
                        <p className='hover:underline decoration-2  decoration-blue-500  cursor-pointer'>{item}</p>
                      </div>
                    ))
                    }</div>
                </div>

                <div>
                  <div className='flex items-center gap-2 p-2'>
                  <img src={Menu} alt="" className='w-4 h-4' />
                  <h3>Sales</h3>
                  </div>
                  <div>{
                    sales.map((item,index)=>(
                      <div key={index} className='flex  items-center gap-2 py-2 px-6'>
                        <img src={Add} alt=""  className='w-4 h-4' />
                        <p className='hover:underline decoration-2  decoration-blue-500  cursor-pointer'>{item}</p>
                      </div>
                    ))
                    }</div>
                </div>

                <div>
                  <div className='flex items-center gap-2 p-2'>
                  <img src={Menu} alt="" className='w-4 h-4' />
                  <h3>Purchases</h3>
                  </div>
                  <div>{
                    purchases.map((item,index)=>(
                      <div key={index} className='flex  items-center gap-2 py-2 px-6'>
                        <img src={Add} alt=""  className='w-4 h-4' />
                        <p className='hover:underline decoration-2  decoration-blue-500  cursor-pointer'>{item}</p>
                      </div>
                    ))
                    }</div>
                </div>
              </div>

              }

          <img src={Refer} alt=""  className='w-6 h-6'/>  
          <img src={Notification} alt="" className='w-6 h-6' />
          <img src={Setting} alt=""  className='w-6 h-6'/>
          <img src={User} alt="" className='w-6 h-6' />
          <img src={Menu} alt="" className='w-6 h-6' />
        </div> 
    </div>
  )
}

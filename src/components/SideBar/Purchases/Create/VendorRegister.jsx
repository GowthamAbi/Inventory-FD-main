import React, { useState } from 'react'

export default function VendorRegister() {
  const[isOption,setIsOption]=useState(null)

  const option=["Other Details","Address","Contact Persons","Bank Details","Custom Fields","Reporting Tags","Remarks"]


  return (
    <div>
      <h1>New Vendor</h1>

      {/* Primary Deatails */}
      <div className='w-full'>

      <div className='w-1/2 p-4 '>

        <div className='flex  p-2 gap-2 '>
           <p className='w-2/6'> Primary Contact</p>
            <div className='flex justify-center items-center gap-2 w-4/6'>
              <select name="" id="" className='bg-white rounded-lg border outline-none border-gray-300 p-2 w-[20%] text-center'>
                <option value=""></option>
                <option value="">Mr.</option>
                <option value="">Mrs.</option>
                <option value="">Ms.</option>
                <option value="">Miss</option>
                <option value="">Dr.</option>
              </select>
              <input type="text" placeholder='First Name' className='w-[40%] outline-none bg-white rounded-lg border border-gray-300 p-2' />
              <input type="text" placeholder='Last Name' className='w-[40%] outline-none bg-white rounded-lg border border-gray-300 p-2' />
            </div>
          </div>

        <div className='flex  p-2 gap-2 '>
           <p className='w-2/6'> Company name</p>
              <input type="text"  className='bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6' />

          </div>

        <div className='flex  p-2 gap-2 '>
           <p className='w-2/6'> Display name</p>
              <input type="text"  className='bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6' />

          </div>

        <div className='flex  p-2 gap-2 '>
           <p className='w-2/6'> Email Address</p>
              <input type="email"  className='bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6' />

          </div>          

        <div className='flex  p-2 gap-2 '>
           <p className='w-2/6'> Phone Number</p>
              <div className='flex w-4/6  gap-4'>
              <input type="phone" placeholder='Phone' className='w-1/2 bg-white rounded-lg border outline-none border-gray-300 p-2 ' />
              <input type="phone" placeholder='Offices' className= 'w-1/2 bg-white rounded-lg border outline-none border-gray-300 p-2 ' />
              </div>
          </div>   
            
        </div>

<div>
  {/* Tabs */}
  <div className="flex gap-4 pl-4">
    {option.map((item, index) => (
      <div key={index} className="flex flex-col items-center">
        <p
          className={`py-2 cursor-pointer ${
            isOption === item ? "text-blue-500" : ""
          }`}
          onClick={() => setIsOption(item)}
        >
          {item}
        </p>

        <div
          className={`w-full h-[2px] transition-all duration-300
            ${isOption === item ? "bg-blue-500" : "bg-transparent"}
          `}
        />
      </div>
    ))}
  </div>

  <hr className="w-1/2 mx-4 my-3 border-gray-300" />

  {/* Content */}
  {isOption === "Other Details" && (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <p className="w-2/6">Email Address</p>
        <input
          type="email"
          className="bg-white rounded-lg border outline-none border-gray-300 p-2 w-4/6"
          placeholder="Enter email"
        />
      </div>
    </div>
  )}
</div>

      </div>
    </div>
  )
}

{/* 
[
"Other Details"
"Address",
"Contact Persons",
"Bank Details",
"Custom Fields",
"Reporting Tags",
"Remarks"]

*/}

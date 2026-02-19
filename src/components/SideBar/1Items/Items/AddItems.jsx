import React, { useState } from 'react'

export default function AddItems() {
  const [isgoods,setIsGoods]=useState(false)
  const [units,setUnits]=useState(null)
  return (
    <div >
      <p>New Item</p>

      <div className='flex gap-4 items-center p-4 w-full'>
          <p>Type </p>
          <div className='flex gap-4 items-center cursor-pointer'>      

            <label className='flex items-center gap-2' >
              <input type="radio" name="type" id="goods" onClick={()=>setIsGoods(!isgoods)} /> 
              <span>Goods</span>
            </label>

             <label className='flex items-center gap-2'>
              <input type="radio" name="type" id="service" onClick={()=>setIsGoods(!isgoods)}  /> 
              <span>Service</span>
             </label>
          </div>
      </div>

    {/*New Item Name Image */}
      <div className=' p-4 bg-gray-100 flex  w-full'>

        <div className='w-1/2'>
        <div className=' flex gap-4  pb-4 '>
          <span className='w-2/6 text-red-700'>Name*</span>
        <input type="text" 
        className='border bg-white rounded-sm
         border-gray-200 w-1/2  outline-blue-400 p-1' />
        </div>

        <div className=' flex gap-4  pb-4 '>
          <span className='w-2/6'>Stock Keeping Unit</span>
        <input type="text" 
        className='border bg-white rounded-sm
         border-gray-200 w-1/2  outline-blue-400 p-1' />
        </div>

        <div className=' flex gap-4  pb-4 '>
          <span className='w-2/6 '>Unit</span>
         <select  value={units}  className='border bg-white rounded-sm
         border-gray-200 w-1/2  outline-blue-400 p-1 cursor-pointer' onChange={(e)=>setUnits(e.target.value)}>
          <option value="" >Select or type to add</option>
          <option value="DOZEN">DOZ - DOZEN</option>
          <option value="BOX">BOX - BOX</option>
          <option value="GRAMS">GMS - GRAMS</option>
          <option value="KILOGRAMS">KGS - KILOGRAMS</option>
          <option value="METERS">MTR - METERS</option>
          <option value="TABLETS">TBZ - TABLETS</option>
          <option value="UNITS">UNT - UNITS</option>
          <option value="PIECES">PCS - PIECES</option>
          <option value="PAIRS">PRS - PAIRS</option>
         </select>
        </div>


        {isgoods && <div className='flex gap-2 justify-center items-center'>
          <input type="checkbox" /> <p>Returnable Item</p>
        </div>}


        </div>

        <div className=' flex flex-col justify-center items-center
       text-gray-400 border border-dashed bg-white cursor-pointer
        border-gray-300 w-64 h-48 rounded-lg p-4 text-center hover:border-blue-500 '>
   
          <span className='w-full'> Drag image(s) here of</span>
          <span className='text-blue-700'>Browse images</span> 
          <span>You can add upto 15 images,each not exceeding
           5 MB in size and 7000 X 7000 pixels resolution</span>

      </div>

      </div>
      
    {/* Item outlook */}

    <div className='w-full'>
         
       <div className=' flex gap-4 w-1/2  pb-4 '>
          <div className='flex flex-col pl-2'>
          <span className='w-2/6 '>Dimensions</span>
          <span className='text-gray-400'>(Length X Width X Height)</span>
          </div>
        <div className='border border-gray-300 rounded-lg w-4/6 h-10'>
          <input type="text" className='outline-none text-end p-2 w-22 ' /> 
          <span className='text-gray-400 '>x</span>
          <input type="text" className='outline-none text-end p-2 w-22'/> 
          <span className='text-gray-400 '>x</span>
          <input type="text" className='outline-none text-end p-2 w-22 '/>
          <select name="" id="" className='outline-none w-17 p-2 text-center '>
            <option value=""></option>
            <option value="in">in</option>
            <option value="cm">cm</option>
          </select>
        </div>
    
            
          </div>
    </div>



    </div>
  )
}



import React from 'react'

export default function AddItems() {
  return (
    <div >
      <p>New Item</p>

      <div className='flex gap-4 items-center p-4 w-full'>
          <p>Type </p>
          <div className='flex gap-4 items-center'>      

            <label className='flex items-center gap-2' >
              <input type="radio" name="type" id="goods" /> 
              <span>Goods</span>
            </label>

             <label className='flex items-center gap-2'>
              <input type="radio" name="type" id="service" /> 
              <span>Service</span>
             </label>
          </div>
      </div>


      <div className=' p-4 bg-gray-100 flex  w-full'>

        <div className='w-1/2'>
        <div className=' flex gap-4  pb-4 '>
          <span className='w-1/6 text-red-700'>Name*</span>
        <input type="text" 
        className='border bg-white rounded-sm
         border-gray-200 w-1/2  outline-blue-400 p-1' />
        </div>

        <div className=' flex gap-4  pb-4 '>
          <span className='w-1/6 '>Stock Keeping Unit</span>
        <input type="text" 
        className='border bg-white rounded-sm
         border-gray-200 w-1/2  outline-blue-400 p-1' />
        </div>

        <div className=' flex gap-4  pb-4 '>
          <span className='w-1/6 '>Unit</span>
        <input type="text" 
        className='border bg-white rounded-sm
         border-gray-200 w-1/2  outline-blue-400 p-1' />
        </div>
        </div>

        <div className=' flex flex-col justify-center items-center
       text-gray-400 border border-dotted bg-white cursor-pointer
        border-gray-500 w-64 h-48 rounded-lg p-4 text-center hover:border-blue-500 '>
   
          <span className='w-full'> Drag image(s) here of</span>
          <span className='text-blue-700'>Browse images</span> 
          <span>You can add upto 15 images,each not exceeding
           5 MB in size and 7000 X 7000 pixels resolution</span>

      </div>

      </div>
      




    </div>
  )
}



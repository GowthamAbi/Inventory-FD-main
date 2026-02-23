import React, { useState } from 'react'
import Select from 'react-select'


export default function POReceive() {
  const[inputData,setInputData]=useState([
    {item:"",order:"",receive:"",transit:"",qtyReceive:""}
  ])
  const options=[
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  ]

  const poNumber=[
 { value: "po-1234", label: "po-1234" },
  { value: "po-2349", label: "po-2349" },
  { value: "po-8764", label: "po-8764" },
  ]

  const itemDetails=[
    {}
  ]

const handleChange=(index,field,value)=>{

const updatedRows =[...inputData]
updatedRows[index][field]=value

setInputData(updatedRows)
  }

  const handleRemove=(index)=>{
  
    const updaterow=inputData.filter((_,i)=>i!==index)
    setInputData(updaterow)
  }

  return (
    <div>
      {/* Vendor Select */}
      <div>
        <div className='flex items-center mt-8 gap-16 px-2 '>
          <p>Vendor Name</p>
          <Select options={options} isSearchable isClearable   placeholder='Search Vendor Name'
           className='w-1/2  '/>
        </div>
        
        <div className='flex items-center mt-8 gap-18 px-2 '>
          <p className='text-red-500'>Po Number*</p>
          <Select options={poNumber} isSearchable isClearable placeholder='Search Po Number'
           className='w-1/2  '/>
        </div>
      </div>

      {/* Po Select */}
      
        <div className='flex items-center mt-8 gap-18 px-2 '>
          <p className='text-red-500'>Po Receive Number*</p>
          <input type="text" className='w-[20%] border border-gray-300 outline-none px-2 rounded-lg' />
        </div>
        <div>
         <div className='flex items-center mt-8 gap-30 px-2 '>
          <p className='text-red-500'>Receive Date*</p>
          <input type="date" className='w-[20%]  border border-gray-300 outline-none px-2 rounded-lg' />
        </div>
     
      </div>

      {/* Items table */}

      <table className='m-4'>
        <thead>
          <tr >
            <th className='border py-4'>Items & Description</th>
            <th className='border '>Ordered</th>
            <th className='border '>Received</th>
            <th className='border '>In Transit</th>
            <th className='border '>Quantity to Receive</th>
          </tr>
        </thead>
        <tbody>
  {inputData.map((i, index) => (
    <tr key={index} >
      <td className='border py-4'>
        <input
          value={i.item}
          onChange={(e) => handleChange(index, "item", e.target.value)}
          className="outline-none  px-2 w-full"
        />
      </td>

      <td className='border '>
        <input
          value={i.order}
          onChange={(e) => handleChange(index, "order", e.target.value)}
          className="outline-none  px-2 w-full"
        />
      </td>

      <td className='border '>
        <input
          value={i.receive}
          onChange={(e) => handleChange(index, "receive", e.target.value)}
          className="outline-none  px-2 w-full"
        />
      </td>

      <td className='border '>
        <input
          value={i.transit}
          onChange={(e) => handleChange(index, "transit", e.target.value)}
          className="outline-none  px-2 w-full"
        />
      </td>

      <td className='border '>
        <input
          value={i.qtyReceive}
          onChange={(e) => handleChange(index, "qtyReceive", e.target.value)}
          className="outline-none px-2 w-full"
        />
      </td>

      <td >
        <button
          type="button"
          onClick={() => handleRemove(index)}
          disabled={inputData.length < 2}
          className="text-red-500 text-2xl font-bold px-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ×
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
      <div>
        <button   onClick={()=>setInputData(pre=>[...pre,{item:"",order:"",receive:"",transit:"",qtyReceive:""}])}
            className="bg-blue-500 text-white px-4  mt-8 rounded-3xl pb-2 cursor-pointer hover:bg-blue-600 ">
          <span className="text-2xl font-bold text-center">+</span> Add Row</button>
      </div>
    </div>
  )
}

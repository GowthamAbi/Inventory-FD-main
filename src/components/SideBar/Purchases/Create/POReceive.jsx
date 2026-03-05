import React, { useState } from 'react'
import Select from 'react-select'


export default function POReceive() {
  const[inputData,setInputData]=useState([{items:"",ordered:"",received:"",inTransit:"",qtytoReceive:""} ])

const[formData,setFormData]=useState({
  vendorName:"",
    poNumber:"",
    poReceiveNumber:"",
    receiveDate:"",
    
    table:{
        items:"",
        ordered:"",
        received:"",
        inTransit:"",
        qtytoReceive:""
    }
})

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

const handleTableChange=(index,e,section)=>{

      const{name,value}=e.target
      const updatedRows =[...inputData]
      updatedRows[index][name]=value
      setInputData(updatedRows)
      setFormData(pre=>({...pre,[section]:{...pre[section],[name]:value}}))

  }

  const handleRemove=(index)=>{
    const updaterow=inputData.filter((_,i)=>i!==index)
    setInputData(updaterow)
  }

  const handleChange=(e)=>{
    const{name,value}=e.target
    setFormData(pre=>({...pre,[name]:value}))
  }

    const handleNestedChange=(e,section)=>{
    const{name,value}=e.target
    setFormData(pre=>({...pre,[section]:{...pre[section],[name]:value}}))
  }

const handleSubmit=(e)=>{
e.preventDefault()
console.log(formData)
}

  return (
    <form onSubmit={handleSubmit}>
      {/* Vendor Select */}
      <div>
        <div className='flex items-center mt-8 gap-16 px-2 '>
          <p>Vendor Name</p>
          <Select options={options} name='vendorName' value={formData.vendorName} onChange={handleChange}
           isSearchable isClearable   placeholder='Search Vendor Name'
           className='w-1/2  '/>
        </div>
        
        <div className='flex items-center mt-8 gap-18 px-2 '>
          <p className='text-red-500'>Po Number*</p>
          <Select options={poNumber} name='poNumber' value={formData.poNumber} onChange={handleChange} 
           isSearchable isClearable placeholder='Search Po Number'
           className='w-1/2  '/>
        </div>
      </div>

      {/* Po Select */}
      
        <div className='flex items-center mt-8 gap-18 px-2 '>
          <p className='text-red-500'>Po Receive Number*</p>
          <input type="text" name='' value={formData.poReceiveNumber} onChange={handleChange} className='w-[20%] border border-gray-300 outline-none px-2 rounded-lg' />
        </div>
        <div>
         <div className='flex items-center mt-8 gap-30 px-2 '>
          <p className='text-red-500'>Receive Date*</p>
          <input type="date" name='receiveDate' value={formData.receiveDate} onChange={handleChange} className='w-[20%]  border border-gray-300 outline-none px-2 rounded-lg' />
        </div>
     
      </div>

      {/* Items table */}

      <table className='m-4 w-full'>
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
        name='items'
          value={formData.table.items}
          onChange={(e) => handleTableChange(index, e,"table")}
          className=" px-2 outline-none  w-full "
        />
      </td>

      <td className='border '>
        <input
        name='ordered'
          value={formData.table.ordered}
          onChange={(e) => handleTableChange(index,e,"table")}
          className=" px-2 outline-none  w-full "
        />
      </td>

      <td className='border '>
        <input
        name='received'
          value={formData.table.received}
          onChange={(e) => handleTableChange(index, e,"table")}
          className=" px-2 outline-none  w-full "
        />
      </td>

      <td className='border '>
        <input
        name='inTransit'
          value={formData.table.inTransit}
          onChange={(e) => handleTableChange(index, e,"table")}
          className=" px-2 outline-none  w-full "
        />
      </td>

      <td className='border '>
        <input
        name='qtytoReceive'
          value={formData.table.qtytoReceive}
          onChange={(e) => handleTableChange(index, e,"table")}
          className=" px-2 outline-none  w-full "
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
        <button type='button'  onClick={()=>setInputData(pre=>[...pre,{items:"",ordered:"",received:"",inTransit:"",qtytoReceive:""}])}
            className="bg-blue-500 text-white px-4  mt-8 rounded-3xl pb-2 cursor-pointer hover:bg-blue-600 ">
          <span className="text-2xl font-bold text-center">+</span> Add Row</button>
      </div>

      
              <div className="p-4 w-full  gap-4 overflow-y-auto mt-6 flex flex-col items-center ">  
                <label htmlFor=""> Attach File(s) to Purchase Receive</label>
                    <div className="w-32 h-8 border border-dashed flex justify-center items-center rounded-lg  ">
                      <input type="file" id="uploadFile" className="hidden" />
                      <label htmlFor="uploadFile"> +</label>
                    </div>
              </div>
       

          <div className="flex gap-2 justify-center items-center py-4 mt-8">
            <button className="bg-blue-500 rounded-lg px-4 text-white cursor-pointer hover:bg-blue-200 hover:text-black ">
              Save
            </button>
            <button className="bg-green-500 rounded-lg px-4 text-white cursor-pointer hover:bg-green-200 hover:text-black">
              Cancel
            </button>
          </div>
    </form>
  )
}

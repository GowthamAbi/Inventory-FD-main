import React, { useState } from 'react'

export default function AddItems() {
  const [isgoods,setIsGoods]=useState(false)
  const [units,setUnits]=useState(null)
  const [formData,setformData]=useState({
    type:"goods",
    name:"",
    sku:"",
    unit:"",
    returnable:true,
    dimensions:{
      length:"",
      width:"",
      hight:"",
      unit:""
    },
    weight:{
      value:"",
      unit:""
    },
    manufacturer:"",
    brand:"",
    upc:"",
    ean:"",
    mpn:"",
    isbn:"",
    salesInfo: {
      enabled: "",
      price:"",
      account:"",
      description:"",
    },
      purchaseInfo: {
      enabled: "",
      costPrice: "",
      account: '',
      description:"",
      preferredVendor: "",
    },

    inventory: {
      trackInventory: "",
      inventoryAccount:"",
      openingStock:"",
    },
  })

  const handleChange=(e)=>{

    const{name,value,checked,type}=e.target
    setformData((pre)=>({...pre,[name]:type==="checkbox"?checked:value}))

    
  }

  const handleNestedChange=(e,section)=>{
      const{name,value,type,checked}=e.target
      setformData(pre=>({...pre,[section]:{...pre[section],[name]:type==="checkbox"?checked :value}}))
 }

  const handleSubmit=()=>{


  }

  return (
    <div className="p-4">

             <p>New Item</p>

          <form action="" onSubmit={handleSubmit} >
            <div className='flex gap-4 items-center p-4 w-full'>
                <p>Type </p>
                <div className='flex gap-4 items-center '>      

                  <label className='flex items-center gap-2' >
                    <input type="radio" name="type" value="goods"  checked={formData.type==="goods"}
                    onChange={handleChange}
                    className='cursor-pointer'
                    /> 
                    <span>Goods </span>
                  </label>

                  <label className='flex items-center gap-2'>
                    <input type="radio" name="type" value="service"  checked={formData.type==="service"} onChange={handleChange} className='cursor-pointer'/> 
                    <span>Service</span>
                  </label>
                </div>
            </div>

          {/*New Item Name Image */}
            <div className=' p-4 bg-gray-100 flex  '>

              <div className='w-1/2'>
              <div className=' flex gap-4  pb-4 '>
                <span className='w-2/6 text-red-700'>Name* </span>
              <input type="text" 
              className='border bg-white rounded-sm
              border-gray-200 w-1/2  outline-blue-400 p-1'  
              value={formData.name} name='name'
              required
                onChange={handleChange}

              />
              </div>

              <div className=' flex gap-4  pb-4 '>
                <span className='w-2/6'>Stock Keeping Unit </span>
              <input type="text" 
              className='border bg-white rounded-sm
              border-gray-200 w-1/2  outline-blue-400 p-1'
              value={formData.sku} name='sku'
              
                onChange={handleChange}
              />
              </div>

              <div className=' flex gap-4  pb-4 '>
                <span className='w-2/6 '>Unit </span>
              <select name="unit"  value={formData.unit}  onChange={handleChange}  className='border bg-white rounded-sm
              border-gray-200 w-1/2  outline-blue-400 p-1 cursor-pointer' >
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


              {formData.type === "goods" && <div className='flex gap-2 justify-center items-center'>
                <input type="checkbox" name='returnable' checked={formData.returnable}
                 onChange={handleChange} /> <p>Returnable Item</p>
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
            <div className='w-full flex'>

              <div className='w-1/2'>
              <div className=' flex gap-4  pb-4 '>

              <div className='flex flex-col pl-2 w-2/6 '>
                  <span className=' '>Dimensions</span>
                  <span className='text-gray-400'>(Length X Width X Hight)</span>
                  {formData.weight.length}
                </div>
                  
                <div className='border border-gray-300 rounded-lg w-1/2 h-10'>
                  <input type="text" className='outline-none text-end p-2 w-26 ' 
                  name='length' value={formData.dimensions.length} onChange={(e)=>handleDimention(e,'dimensions')}/> 
                  <span className='text-gray-400 '>x</span>
                  <input type="text" className='outline-none text-end p-2 w-26' name='width' value={formData.dimensions.width} onChange={(e)=>handleDimention(e,'dimensions')}/> 
                  <span className='text-gray-400 '>x</span>
                  <input type="text" className='outline-none text-end p-2 w-26 ' name='hight' value={formData.dimensions.hight} onChange={(e)=>handleDimention(e,'dimensions')}/>
                  <select name="unit" value={formData.dimensions.unit} onChange={(e)=>handleDimention(e,'dimensions')} className='outline-none w-14 p-2 text-center '>
                    <option value=""></option>
                    <option value="in">in</option>
                    <option value="cm">cm</option>
                  </select>
                </div>
                    
              </div>

              <div className=' flex gap-4  pb-4'>
                    <span className='w-2/6 pl-2'>Manufactures</span>
                    <input name='manufacturer' value={formData.manufacturer} onChange={handleChange} type="text" className='w-1/2 outline-none border border-gray-300 p-1.5 rounded-lg ' />
              </div>

              <div className=' flex gap-4  pb-4'>
                    <span className='w-2/6 pl-2'>Universal Product Code</span>
                    <input type="text" name='upc' value={formData.upc} onChange={handleChange} className='w-1/2 outline-none border border-gray-300 p-1.5 rounded-lg ' />
              </div>

                <div className=' flex gap-4  pb-4'>
                    <span className='w-2/6 pl-2'>International Article Number</span>
                    <input type="text" name='ean' value={formData.ean} onChange={handleChange} className='w-1/2 outline-none border border-gray-300 p-1.5 rounded-lg ' />
              </div>  
                </div>

                <div className='w-1/2 '>

              <div className=' flex gap-4  pb-4 '>
                    <span className='w-2/6 pl-2'>Weight</span>

                    <div className='w-1/2 outline-none border
                    border-gray-300 p-1.5 rounded-lg '>
                    <input type="text" className='w-[90%] outline-none ' name='weight' value={formData.weight.value} onChange={(e)=>handleDimention(e,'weigth')} />
                    <select id=""  name='unit' value={formData.weight.unit} onChange={(e)=>handleDimention(e,'weigth')}>
                      <option value="kg">kg</option>
                      <option value="g">g</option>
                      <option value="kg">ib</option>
                      <option value="g">oz</option>
                    </select>
                    </div>
              </div>  

              <div className=' flex gap-4  pb-4 '>
                    <span className='w-2/6 pl-2'>Brand</span>
                    <input type="text" className='w-1/2 outline-none border border-gray-300 p-1.5 rounded-lg ' name='brand' value={formData.brand} onChange={handleChange} />
              </div> 

              <div className=' flex gap-4  pb-4 '>
                    <span className='w-2/6 pl-2'>Manufacturing Part Number</span>
                    <input type="text" className='w-1/2 outline-none border border-gray-300 p-1.5 rounded-lg ' name='mpn' value={formData.mpn} onChange={handleChange} />
              </div> 

              <div className=' flex gap-4  pb-4 '>
                    <span className='w-2/6 pl-2'>International Standard Book Number</span>
                    <input type="text" className='w-1/2 outline-none border border-gray-300 p-1.5 rounded-lg ' name='isbn' value={formData.isbn} onChange={handleChange} />
              </div> 

                </div>

        </div>

            {/* Information */}
          <div className='full flex'>

            {/* Right */}
            <div className='w-1/2'>

            <div className='flex gap-2 justify-center items-center mb-4'>
              <input type="checkbox" name='enabled' checked={formData.salesInfo.enabled} onChange={(e)=>handleNestedChange(e,'salesInfo')} />
              <h2>Sales Information</h2>
            </div>

            <div className='flex w-full pl-2 mb-4'>
              <span className='w-2/6 text-red-500'>Selling Price*</span>
              <div className='border border-gray-300 flex rounded-lg w-1/2 mx-2 '>
                <p className='bg-gray-200 p-1'>INR</p>
                <input className=' outline-none p-1' type="text" name="price" value={formData.salesInfo.price} onChange={(e)=>handleNestedChange(e,'salesInfo')}  />
              </div>
            </div>

            <div className='flex w-full pl-2 mb-4'>
              <span className='w-2/6 text-red-500'>Account*</span>
              <div className='border border-gray-300 flex rounded-lg w-1/2 mx-2 '>
                <input className=' outline-none p-1' type="text" name="account" value={formData.salesInfo.account} onChange={(e)=>handleNestedChange(e,'salesInfo')} />
              </div>
            </div>

            <div className='flex w-full pl-2 mb-4'>
              <span className='w-2/6 '>Description</span>
                <textarea  className='w-1/2 mx-2 rounded-lg border border-gray-300'
                 name="description" value={formData.salesInfo.description} onChange={(e)=>handleNestedChange(e,'salesInfo')}></textarea>
       
            </div>

            </div>

          {/* Left */}
            <div className='w-1/2'>

            <div className='flex gap-2 justify-center items-center mb-4'>
              <input type="checkbox" name='enabled' checked={formData.purchaseInfo.enabled} onChange={(e)=>handleNestedChange(e,"purchaseInfo")} />
              <h2>Purchase Information</h2>
            </div>

            <div className='flex w-full pl-2 mb-4'>
              <span className='w-2/6 text-red-500'>Cost Price*</span>
              <div className='border border-gray-300 flex rounded-lg w-1/2 mx-2 '>
                <p className='bg-gray-200 p-1'>INR</p>
                <input className=' outline-none p-1' type="text" name='costPrice' value={formData.purchaseInfo.costPrice} onChange={(e)=>handleNestedChange(e,"purchaseInfo")} />
              </div>
            </div>

            <div className='flex w-full pl-2 mb-4'>
              <span className='w-2/6 text-red-500'>Account*</span>
              <div className='border border-gray-300 flex rounded-lg w-1/2 mx-2 '>
                <input className=' outline-none p-1' type="text" name='account' value={formData.purchaseInfo.account} onChange={(e)=>handleNestedChange(e,"purchaseInfo")} />
              </div>
            </div>

            <div className='flex w-full pl-2 mb-4'>
              <span className='w-2/6 '>Description</span>
                <textarea name='description' value={formData.purchaseInfo.description} onChange={(e)=>handleNestedChange(e,"purchaseInfo")} className='w-1/2 mx-2 rounded-lg border border-gray-300'></textarea>
       
            </div>

            <div className='flex w-full pl-2 mb-4'>
              <span className='w-2/6 '>Preferred Vendor</span>
              <div className='border border-gray-300 flex rounded-lg w-1/2 mx-2 '>
                <input className=' outline-none p-1' type="text" name='preferredVendor' value={formData.purchaseInfo.preferredVendor} onChange={(e)=>handleNestedChange(e,"purchaseInfo")}/>
              </div>
            </div>

            </div>

          </div>

            {/* Track Information */}
          <div className='full flex'>

            {/* Right */}
            <div className='w-1/2 pl-2'>

            <div className='flex gap-4 justify-center items-center mb-4'>
              <input type="checkbox"  />
              <div>
              <h2>Track Inventory for this item</h2>
              <span className='text-gray-500'>You cannot enable/disable inventory tracking once you've created transactions for this item</span>
            </div>
            </div>

            <div className=' w-full pl-2 mb-4'>

            <div className=' flex mb-4'>
               <span className='w-2/6 text-red-500'>Inventory Account*</span>
              <input className='rounded-lg outline-none p-1 border border-gray-300 w-1/2'
               type="text" name='inventoryAccount' value={formData.inventory.inventoryAccount} onChange={(e)=>handleNestedChange(e,"purchaseInfo")}  />
            </div>

            <div className=' flex'>
               <span className='w-2/6 '>Opening Stock</span>
              <input className='rounded-lg outline-none p-1 border border-gray-300 w-1/2' type="text" name='trackInventory' value={formData.inventory.trackInventory} onChange={(e)=>handleNestedChange(e,"inventory")} />
            </div>

            </div>

            </div>

          {/* Left */}
   

            <div className=' flex w-1/2  items-center'>
               <span className='w-2/6 '>Opening Stock</span>
              <input className='rounded-lg outline-none p-1 border h-10 border-gray-300 w-1/2' type="text" name='openingStock' value={formData.inventory.openingStock} onChange={(e)=>handleNestedChange(e,"inventory")} />
            </div>
       



          </div>

          <div className='flex gap-4 justify-center '>
            <button className='bg-blue-400 cursor-pointer px-4 rounded-lg text-white' >SAVE</button>
            <button>CANCEL</button>
          </div>
          </form>
    </div>
  )
}





import React, { useState } from "react";

export default function PurchasesOrder() {
const[items,setItems]=useState({
  itemDetails:"",qty:"",rate:"",amount:""
})
  const[rows,setRows]=useState([{itemDetails:"",qty:"",rate:"",amount:""}])

  const itemstable=["ITEM DETAILS","QUANTITY","RATE","AMOUNT"]
  const placeHolder={
    image:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  <circle cx="8.5" cy="8.5" r="1.5"/>
  <path d="M21 15l-5-5L5 21"/>
</svg>,
name:"Type or Clicke to Selected Item",
default:"0.00"
  }

  const handleChange=(index,field,value)=>{

const updatedRows =[...rows]
updatedRows[index][field]=value

const qty=Number(updatedRows[index].qty) || 0
const rate=Number(updatedRows[index].rate) || 0
const total=rate*qty
updatedRows[index].amount=total
setRows(updatedRows)
  }

  const handleRemove=(index)=>{
  
    const updaterow=rows.filter((_,i)=>i!==index)
    setRows(updaterow)
  }
    return (
    <div>
      <form action="" className="w-full m-6">

        {/*Vendor name and address*/}
        <div >
          <div className="flex  w-full pb-4">
          <h4 className="text-red-500  w-1/6">Vendor Name*</h4>
          <div className="flex justify-center items-center w-1/2">
            <input type="text" className=" border-b border-l border-t border-gray-500
             rounded-l-lg outline-none p-2 w-full" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-11 rounded-r-lg  text-white bg-blue-500 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.6-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>    
          </div>

          <div className="flex  w-full pb-4">
            <p className="text-red-500 w-1/6">Delivery Address*</p>
            <div className="flex gap-4">
              <input type="radio" id="organization" name="type"/>
              <label htmlFor="">Organization</label>
              <input type="radio" id="customer" name="type" />
              <label htmlFor="">Customer</label>
            </div>
          </div>

          <div className="flex  w-full pb-4">
            <p className="text-red-500 w-1/6">Purchase Order#*</p>
            <input type="text" className=" border border-gray-500
             rounded-lg outline-none p-2 w-2/6" />
          </div>

          <div className="flex  w-full pb-4">
            <p className=" w-1/6">Reference#</p>
            <input type="text" className=" border border-gray-500
             rounded-lg outline-none p-2 w-2/6" />
          </div>

          <div className="flex  w-full pb-4">
            <p className=" w-1/6">Date</p>
            <input type="date" className=" border border-gray-500
             rounded-lg outline-none p-2 w-2/6" />
          </div>

          <div className="flex  w-full pb-4">
            <p className=" w-1/6">Delivery Date</p>
            <input type="date" className=" border border-gray-500
             rounded-lg outline-none p-2 w-2/6" />
          </div>

        </div>

        {/*Items Details*/}
        <table className="mt-8 " >
          <thead >
                <tr >
                  <th className="border border-gray-300 h-12 w-2/4">ITEMS DETAILS</th>
                  <th className="border border-gray-300 h-12 w-1/4">QTY</th>
                  <th className="border border-gray-300 h-12 w-1/4">RATE</th>
                  <th className="border border-gray-300 h-12 px-8 w-1/4">AMOUNT</th>

                </tr>
          </thead>
          <tbody>
                
                    {
                      rows.map((i,index)=>(
                        <tr key={index}  >
                          <td  className="" >
                           <div className="relative">
                             {!i.itemDetails && <span className="absolute text-gray-300 pl-4 top-6  ">{placeHolder.image}</span>}
                            <input type="text" className={`border border-gray-300 outline-none px-2 h-16  w-full ${i.itemDetails? "pl-8 ":"pl-10"} `} placeholder={placeHolder.name} value={i.itemDetails} onChange={(e)=>handleChange(index,"itemDetails",e.target.value)}/>
                            
                           </div>
                           </td>
                          <td><input type="text" className="border border-gray-300 outline-none px-2 h-16 text-end  w-full" placeholder={placeHolder.default}  value={i.qty} onChange={(e)=>handleChange(index,"qty",e.target.value)} /></td>
                          <td><input type="text" className="border border-gray-300 outline-none px-2 h-16 text-end  w-full" placeholder={placeHolder.default}  value={i.rate} onChange={(e)=>handleChange(index,"rate",e.target.value)} /></td>
                          <td className="border border-gray-300 outline-none px-2 h-16 text-end   w-full">
                            {i.amount}
                            </td>
                          <td><button type="button"
                           className="text-red-500 text-2xl font-bold cursor-pointer   outline-none px-2 h-16 disabled:opacity-50 disabled:cursor-not-allowed mx-4" onClick={()=>handleRemove(index)} 
                           
           disabled={rows.length < 2}
                           >X</button></td>
                        </tr>
                      ))
                    }
                  
          
          </tbody>
        </table>


        
        {/* SubTotal */}

        <div className="flex  items-center space-x-4  w-full">
         <div className="px-4 w-[42%]  " >
           <button type="button"  onClick={()=>setRows(pre=>[...pre,{itemDetails:"",qty:"",rate:"",amount:""}])}
            className="bg-blue-500 text-white px-4  mt-8 rounded-3xl pb-2 cursor-pointer hover:bg-blue-600 ">
             <span className="text-2xl font-bold text-center">+</span> Add Row</button>

           <div className="pt-8 ">
              <p>Customer Notes</p>
              <textarea name="" id="" placeholder="Will be Displayed on Purchase Order"
               className="border border-gray-300  rounded-t-lg px-4 w-full"></textarea>
          </div>
             </div>


          <div className="bg-gray-100 ml-14 rounded-lg p-2 w-1/2  mt-4  ">
              <div className="flex  ">
                <div className="w-1/2 ">
                <p className="pb-4">Sub Total</p>

                <div className="flex  gap-4 w-full pb-4">
                  <p className="w-1/2">Discount</p>
                  <input type="text"  className="bg-white border border-gray-300 outline-none px-2 w-1/2 "/><label htmlFor="">%</label>
                </div>

                <div className="flex  gap-4 w-full pb-4">
                  <p className="w-1/2">GST</p>
                  <input type="text"  className="bg-white border border-gray-300 outline-none px-2 w-1/2"/><label htmlFor="">%</label>
                </div>  
              </div>

              <div className="w-1/2 text-end">
               
                  <p className="pb-4">0.000</p>
                  <p className="pb-4">0.000</p>
                  <p className="pb-4">0.000</p>
              </div> 
              </div>
              
              <div className="w-full h-1 bg-gray-200"/>
              <div className="flex ">
                <p className="w-1/2 pt-4">Total</p>
                <p className="w-1/2 text-end pt-4">0.000</p>
              </div>              
        </div>

        </div>


        {/* Upload Necessary Document */}

         <div className="flex  items-center  bg-gray-100 w-5/6 space-y-10 mt-10 ">
         <div className="px-4 w-1/2 " >
           <div className="pt-8 ">
              <p>Terms & Conditions</p>
              <textarea name="" id="" placeholder="Enter the terms and conditions of your business to be displayed in your transaction"
               className="border border-gray-300  rounded-t-lg px-4 w-full"></textarea>
          </div>
             </div>


          <div className=" ml-14 rounded-lg p-2 w-2/6 mt-4 flex flex-col gap-4 items-center py-4  ">
                     <p>Attach File(s) to Purchase Order</p>
               <div className="w-32 h-32 border border-dashed flex justify-center items-center rounded-lg ">
                      <input type="file" id="uploadFile" className="hidden" />
                     <label htmlFor="uploadFile"> +</label>
             </div>            
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
    </div>
  );
}

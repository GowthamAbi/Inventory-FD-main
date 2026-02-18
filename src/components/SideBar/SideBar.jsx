import { useState } from 'react'
import { home, inventory,arrow, sales,items, purchase, reports, documents } from '../../Icons/SidebarIcons/SidebarIcons'
import {  useNavigate } from 'react-router-dom'
export default function SideBar() {
    const[inventoryActive,setInventoryActive]=useState(false)
    const[salesActive,setSalesActive]=useState(false)
    const[itemsActive,setItemsActive]=useState(false)
    const[purchaseActive,setPurchaseActive]=useState(false)
    const[isSelect ,setIsSelect]=useState(null)
    
    const navigate=useNavigate()
    const handleCLick=({list})=>{
        setIsSelect(list)
        
         const item = list.toLowerCase().replace(/\s+/g, "");

        navigate(`/inventory/${item}`)
        
    }
    
  return (
    <div className='bg-[#21263c] w-64  h-screen overflow-y-auto leading-10 '>

        <h1 className='bg-[#101324] text-center text-white text-xl mb-4 py-4 rounded-b-2xl'>UG Inventory</h1>

            <div className="flex items-center   gap-2 pl-8  cursor-pointer  hover:bg-gray-700 rounded-lg">
                {home.map((item,index)=>(
                    <div key={index} className="flex items-center gap-2">
                        
                            {item.svg}
                        <p className='text-white'>{item.name}</p>
                    </div>
                )) }
                
            </div>

            <div className="cursor-pointer ">
               
                {items.map((item,index)=>(
                    <div key={index}  >
                        <div className="flex items-center gap-2 pb-2 hover:bg-gray-700 rounded-lg" onClick={()=>setItemsActive(!itemsActive)} >
                           {itemsActive ? arrow.up:arrow.down }
                            {item.svg}
                            <p className='text-white '>{item.name}</p>
                        </div>
                        {itemsActive && item.list.map((list,j)=>(
                            <ul key={j} className="  text-white" onClick={()=>handleCLick({list})}>
                                <li className={`${isSelect===list?"bg-blue-500 pl-14 rounded-lg":"pl-14 hover:bg-gray-700"}`} >{list}</li>
                            </ul>
                        ))}
                    </div>
                )) }
                
           
            </div>

            <div className="cursor-pointer ">
               
                {inventory.map((item,index)=>(
                    <div key={index}  >
                        <div className="flex items-center gap-2 pb-2 hover:bg-gray-700 rounded-lg" onClick={()=>setInventoryActive(!inventoryActive)}>
                           {inventoryActive ? arrow.up:arrow.down }
                            {item.svg}
                            <p className='text-white '>{item.name}</p>
                        </div>
                        {inventoryActive && item.list.map((list,j)=>(
                            <ul key={j} className="  text-white" onClick={()=>setIsSelect(list)}>
                                <li className={`${isSelect===list?"bg-blue-500 pl-14 rounded-lg":"pl-14 hover:bg-gray-700"}`}>{list}</li>
                            </ul>
                        ))}
                    </div>
                )) }
                
           
            </div>

            <div className="cursor-pointer">
               
                {sales.map((item,index)=>(
                    <div key={index}  >
                        <div className="flex items-center gap-2 pb-2 hover:bg-gray-700 rounded-lg" onClick={()=>setSalesActive(!salesActive)}>
                           {salesActive ? arrow.up:arrow.down }
                            {item.svg}
                            <p className='text-white '>{item.name}</p>
                        </div>
                        {salesActive && item.list.map((list,j)=>(
                            <ul key={j} className="  text-white" onClick={()=>setIsSelect(list)}>
                                <li className={`${isSelect===list?"bg-blue-500 pl-14 rounded-lg":"pl-14 hover:bg-gray-700"}`}>{list}</li>
                            </ul>
                        ))}
                    </div>
                )) }
                
           
            </div>

            <div className="cursor-pointer ">
               
                {purchase.map((item,index)=>(
                    <div key={index}  >
                        <div className="flex items-center gap-2 pb-2 hover:bg-gray-700 rounded-lg" onClick={()=>setPurchaseActive(!purchaseActive)}>
                           {purchaseActive ? arrow.up:arrow.down }
                            {item.svg}
                            <p className='text-white '>{item.name}</p>
                        </div>
                        {purchaseActive && item.list.map((list,j)=>(
                            <ul key={j} className=" text-white" onClick={()=>setIsSelect(list)}>
                                <li className={`${isSelect===list?"bg-blue-500 pl-14 rounded-lg":"pl-14 hover:bg-gray-700"}`}>{list}</li>
                            </ul>
                        ))}
                    </div>
                )) }
                
           
            </div>

            <div className="flex items-center gap-2 pl-8 cursor-pointer hover:bg-gray-700 rounded-lg">
                {reports.map((item,index)=>(
                    <div key={index} className="flex items-center gap-2">
                        
                            {item.svg}
                        <p className='text-white'>{item.name}</p>
                    </div>
                )) }
                
            </div>

            <div className="flex items-center gap-2 pl-8  cursor-pointer hover:bg-gray-700 rounded-lg">
                {documents.map((item,index)=>(
                    <div key={index} className="flex items-center gap-2">
                        
                            {item.svg}
                        <p className='text-white'>{item.name}</p>
                    </div>
                )) }
                
            </div>

          
    </div>
  )
}

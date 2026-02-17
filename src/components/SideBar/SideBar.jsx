import { useState } from 'react'
import Home from '../../Icons/SidebarIcons/home.png'
import { SidebarIcon } from '../../Icons/SidebarIcons/SidebarIcons'
export default function SideBar() {
    const[active,setActive]=useState(false)
  return (
    <div className='bg-[#21263c] w-64  h-screen '>

        <h1 className='bg-[#101324] text-center text-white text-xl mb-4 py-4 rounded-b-2xl'>UG Inventory</h1>

            <div className="flex items-center gap-2 pl-8 mx-2 pb-4">
                {SidebarIcon.home }
                <p className='text-white'>Home</p>
            </div>

            <div className=" pl-8 mx-2 pb-4">
                <div className="flex items-center gap-2">
                {SidebarIcon.items }
                <p className='text-white'>Items</p>
                </div>
                <ul className=' text-white pl-8 py-2'>
                    <li className='pb-2'>Items</li>
                    <li className='pb-2'>Composite Items</li>
                    <li className='pb-2'>Item Groups</li>
                    <li className='pb-2'>Price list</li>
                </ul>
            </div>

            <div className="flex items-center gap-2 pl-8 mx-2 pb-4">
                {SidebarIcon.inventory }
                <p className='text-white'>Inventory</p>
            </div>

            <div className="flex items-center gap-2 pl-8 mx-2 pb-4">
                {SidebarIcon.sales }
                <p className='text-white'>Sales</p>
            </div>

            <div className="flex items-center gap-2 pl-8 mx-2 pb-4">
                {SidebarIcon.purchase }
                <p className='text-white'>Purchases</p>
            </div>

            <div className="flex items-center gap-2 pl-8 mx-2 pb-4">
                {SidebarIcon.reports }
                <p className='text-white'>Reports</p>
            </div>

            <div className="flex items-center gap-2 pl-8 mx-2 pb-4">
                {SidebarIcon.documents }
                <p className='text-white'>Documents</p>
            </div>
    </div>
  )
}

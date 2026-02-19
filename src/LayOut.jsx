import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar/SideBar'
import Navbar from './components/NavBar/Navbar'
export default function LayOut(){
    return(
        <div className='flex  '>
            <SideBar/>
             <div className='flex-1'>
                <Navbar/>
                <main className="ml-64 pt-16 h-screen overflow-y-auto bg-gray-50"
      >
                    <Outlet/>
                </main>
             </div>
        </div>
    )
}
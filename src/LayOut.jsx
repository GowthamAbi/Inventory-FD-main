import { Outlet } from 'react-router-dom'
import  Nav from './components/NavBar/Navbar'
export default function LayOut(){
    return(
        <div>
            <Nav/>
        <Outlet/>
        </div>
    )
}
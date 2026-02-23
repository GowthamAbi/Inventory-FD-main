import { Route, Routes } from 'react-router-dom'
import LayOut from './LayOut'
import AddItems from './components/SideBar/1Items/Items/AddItems'
import ItemsList from './components/SideBar/1Items/Items/ItemsList'
import ItemGroup from './components/SideBar/1Items/Items/ItemGroup'
import PriceLists from './components/SideBar/1Items/Items/PriceLists'
import CompositeItmes from './components/SideBar/1Items/Items/CompositeItmes'


{/* Purchases List */}
import BillList from './components/SideBar/Purchases/List/BillList'
import POReceiveList from './components/SideBar/Purchases/List/POReceiveList'
import PurchasesOrderList from './components/SideBar/Purchases/List/PurchasesOrderList'
import VendorList from './components/SideBar/Purchases/List/VendorList'

{/* Purchases Create */}
import Bills from './components/SideBar/Purchases/Create/Bills'
import POReceive from './components/SideBar/Purchases/Create/POReceive'
import PurchasesOrder from './components/SideBar/Purchases/Create/PurchasesOrder'
import VendorRegister from './components/SideBar/Purchases/Create/VendorRegister'
import CreditNotes from './components/SideBar/sales/Create/Credit Notes'
import Customers from './components/SideBar/sales/Create/Customers'
import SalesOrder from './components/SideBar/sales/Create/Sales Order'

export default function App() {
  return (
    <div>
  
      <Routes>
      
        <Route path='/' element={<LayOut/>}>

        {/* Items  */}
        <Route path ='inventory/items/new' element={<AddItems/>}/>
        <Route path='inventory/items' element={<ItemsList/>}/>
        <Route path='inventory/compositeitems' element={<CompositeItmes/>}/>
        <Route path='inventory/itemgroups' element={<ItemGroup/>}/>
        <Route path='inventory/pricelist' element={<PriceLists/>}/>

        {/* Add Items  */}
        <Route path='inventory/compositeitems/new' element={<AddItems/>}/>
        

         {/* Purchases List */}
        <Route path='inventory/bills' element={<BillList/>}/>
        <Route path='inventory/purchasereceive' element={<POReceiveList/>}/>
        <Route path='inventory/purchaseorder' element={<PurchasesOrderList/>}/>
        <Route path='inventory/vendors' element={<VendorList/>}/>

        {/* Purchases Create */}
        <Route path='inventory/customers/new' element={<Customers/>}/>
        <Route path='inventory/salesorder/new' element={<SalesOrder/>}/>
        <Route path='inventory/invoices/new' element={<SalesOrder/>}/>
        {/* Sales Create */}
        </Route>
      </Routes>
      
      </div>
  )
}

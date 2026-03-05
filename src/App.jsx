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

{/* Sales Create */}
import CreditNotes from './components/SideBar/sales/Create/Credit Notes'
import Customers from './components/SideBar/sales/Create/Customers'
import SalesOrder from './components/SideBar/sales/Create/Sales Order'
import DeliveryChallans from './components/SideBar/sales/Create/Delivery Challans'
import Invoices from './components/SideBar/sales/Create/Invoices'
import PaymentsReceived from './components/SideBar/sales/Create/Payments Received'
import RetainerInvoices from './components/SideBar/sales/Create/Retainer Invoices'

{/* Sales List */}
import Customerslist from './components/SideBar/sales/List/Customers list'
import CreditNoteslist from './components/SideBar/sales/List/Credit Notes list'
import SalesOrderlist from './components/SideBar/sales/List/Sales Order list'
import DeliveryChallanslist from './components/SideBar/sales/List/Delivery Challans list'
import Invoiceslist from './components/SideBar/sales/List/Invoices list'
import PaymentsReceivedlist from './components/SideBar/sales/List/Payments Received list'
import RetainerInvoiceslist from './components/SideBar/sales/List/Retainer Invoices list'

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

        {/* Sales Create */}
        <Route path='inventory/customers/new' element={<Customers/>}/>
        <Route path='inventory/salesorder/new' element={<SalesOrder/>}/>
        <Route path='inventory/invoices/new' element={<Invoices/>}/>
        <Route path='inventory/creditnotes/new' element={<CreditNotes/>}/>
        <Route path='inventory/deliverychallans/new' element={<DeliveryChallans/>}/>
        <Route path='inventory/paymentreceived/new' element={<PaymentsReceived/>}/>
        <Route path='inventory/retainerinvoices/new' element={<RetainerInvoices/>}/>

        {/* Sales List */}
        <Route path='inventory/customers/' element={<Customerslist/>}/>
        <Route path='inventory/salesorder/' element={<SalesOrderlist/>}/>
        <Route path='inventory/invoices/' element={<Invoiceslist/>}/>
        <Route path='inventory/creditnotes/' element={<CreditNoteslist/>}/>
        <Route path='inventory/deliverychallans/' element={<DeliveryChallanslist/>}/>
        <Route path='inventory/paymentreceived/' element={<PaymentsReceivedlist/>}/>
        <Route path='inventory/retainerinvoices/' element={<RetainerInvoiceslist/>}/>
        
        {/* Purchases Create */}
        <Route path='inventory/bills/new' element={<Bills/>}/>
        <Route path='inventory/purchasereceive/new' element={<POReceive/>}/>
        <Route path='inventory/purchaseorder/new' element={<PurchasesOrder/>}/>
        <Route path='inventory/vendors/new' element={<VendorRegister/>}/>
        </Route>
      </Routes>
      
      </div>
  )
}

import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Banner from "./components/Banner";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import InvoiceDetail from "./components/InvoiceDetail";
import LoginPopup from "./components/LoginPopup";
import Navbar from "./components/Navbar";
import ViewDetailsPage from "./components/ViewDetailsPage";
import Dashboard from "./pages/Dashboard";
import InvoicePage from "./pages/InvoicePage";
import LoginPage from './pages/LoginPage';
import ProductPage from "./pages/ProductPage";


const App = () => {
  const [showLogin, setShowLogin] = useState(false);
 
  

  return(
     <Router>
        {showLogin?<LoginPopup setShowLogin={setShowLogin}/> : <></>}
     <div className="app">
     <Navbar setShowLogin={setShowLogin}/>

      <Routes>
        <Route path="/" element={<Banner/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/invoices" element={<InvoicePage/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
        <Route path="/product/create" element={<CreateProduct/>}></Route> 
        <Route path="/product/view/:productid" element ={<ViewDetailsPage/>}></Route>
        <Route path="/product/edit/:productid" element={<EditProduct/>}></Route>
        <Route path="/invoiceDetails" element={<InvoiceDetail/>}></Route>
      </Routes>
      </div>
    </Router> 
    
  )
}

export default App;

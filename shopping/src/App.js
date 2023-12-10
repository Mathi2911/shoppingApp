import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import ProductList from "./components/productList";
import CartList from "./components/cartList";
import AddressPage from "./components/addressPage";
import SummaryPage from "./components/summaryPage";
import PaymentOption from "./components/paymentOption";
function App() {
  return (
   <div>
       <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartList />} />
          <Route path='/address' element={<AddressPage/>} />
         <Route path='/summary' element={<SummaryPage/>} />
          <Route path='/paymentOption' element={<PaymentOption/>} />
        </Routes>
      </Router>
   </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../styles/App.css';
import Header from "./Header";
import MidPart from "./MidPart";
import Footer from "./Footer";
import Signup from "./SignUp";
import Login from "./Login";
import ProductPage from "./ProductPage";
import Search from "./Search";
import Home from "./Home";
import Nopage from "./Nopage";
import GlobalContext from "./GlobalContext";
import Genre from "./Genre";
import SeatLayout from "./SeatLayout";
import PaymentPage from "./PaymentPage";
import OrderDetails from "./OrderDetails";


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <GlobalContext>
          <Header />
          <MidPart>
            <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/productpage/:id' element={<ProductPage />} />
              <Route path='/genre/:gnr' element={<Genre />} />
              <Route path='/search/:searchm' element={<Search />} />
              <Route path='/seatlayout/:theaterId/:showTime/:selectedDate/:movieName' element={<SeatLayout />} />
              <Route path='/paymentpage/:pdetails/:od' element={<PaymentPage />} />
              <Route path='/orderdetails/:orderDetails' element={<OrderDetails />} />
              <Route path='/' element={<Home />} />
              <Route path='/*' element={<Nopage />} />
            </Routes>
          </MidPart>
          <Footer />
        </GlobalContext>
      </BrowserRouter>
    </div>
  );
}

export default App;

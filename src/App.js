import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import OurProducts from './components/ourproducts';
import Design from './components/design';
import Manufacture from './components/manufacture';
import ContactUs from './components/contactus';
import AboutUs from './components/aboutus';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Cart from './components/cart';
import ProductDetails from './components/productdetails';
import TermsandConditions from './components/termsandconditions';
import PrivacyPolicy from './components/privacypolicy';
import RefundandCancellation from './components/refundandcancellation';
import CheckOut from './components/checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourproducts" element={<OurProducts />} />
        <Route path="/design" element={<Design />} />
        <Route path="/manufacture" element={<Manufacture />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/termsandconditions" element={<TermsandConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/refundandcancellation" element={<RefundandCancellation />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div> 
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/productlist" element={<ProductList/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product" element={<Product/>} />


        </Routes>
      
      </Router>
        
    </div>
  );
}

export default App;

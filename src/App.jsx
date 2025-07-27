import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductListing from './pages/ProductListing.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import { CartWishlistProvider } from './context/CartWishlistContext';
import './App.css';

function App() {

  return (
    <CartWishlistProvider>
      <Router>
        <div className="app-layout">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} /> 
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartWishlistProvider>
  );
}

export default App;

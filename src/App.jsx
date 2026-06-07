import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductListing from './pages/ProductListing.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import SidebarCart from './components/SidebarCart/SidebarCart';
import ConfirmationBar from './components/ConfirmationBar/ConfirmationBar';
import { CartWishlistProvider } from './context/CartWishlistContext';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      if (target.tagName === 'IMG' || target.closest('img')) {
        setIsHoveringImage(true);
      } else {
        setIsHoveringImage(false);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <AuthProvider>
      <CartWishlistProvider>
        <Router>
          <div className="app-layout">
            {/* Custom Cursor */}
            <div
              className={`custom-cursor ${isHoveringImage ? 'hovering-image' : ''}`}
              style={{ left: cursorPos.x, top: cursorPos.y }}
            ></div>

            {/* Sticky top stack: announcement bar + navbar */}
            <div className="site-header">
              <AnnouncementBar />
              <Navbar />
            </div>

            <SidebarCart />
            <ConfirmationBar />

            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<ProductListing />} />
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </CartWishlistProvider>
    </AuthProvider>
  );
}

export default App;

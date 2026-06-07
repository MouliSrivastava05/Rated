import React from 'react';
import { useCartWishlist } from '../../context/CartWishlistContext';
import { Link } from 'react-router-dom';
import './SidebarCart.css';

const SidebarCart = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCartWishlist();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      <div className={`sidebar-cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}></div>
      <div className={`sidebar-cart ${isCartOpen ? 'open' : ''}`}>
        <div className="sidebar-cart-header">
          <h2>Your Bag</h2>
          <button className="sidebar-cart-close" onClick={() => setIsCartOpen(false)}>Close ✕</button>
        </div>

        <div className="sidebar-cart-items">
          {cartItems.length === 0 ? (
            <p className="sidebar-cart-empty font-sans text-sm">Your cart is empty.</p>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="sidebar-cart-item">
                <img src={item.image} alt={item.title} className="sidebar-cart-item-image" />
                <div className="sidebar-cart-item-info">
                  <h3 className="font-serif text-md">{item.title}</h3>
                  <p className="font-sans text-sm">${item.price.toFixed(2)}</p>
                  <div className="sidebar-cart-item-actions font-sans text-sm">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button className="sidebar-cart-item-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="sidebar-cart-footer">
            <div className="sidebar-cart-subtotal font-sans text-md">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="sidebar-cart-checkout font-sans text-sm" onClick={() => setIsCartOpen(false)}>
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SidebarCart;

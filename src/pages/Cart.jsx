import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';
import {
  FaPlusCircle,
  FaMinusCircle,
  FaTimesCircle,
} from 'react-icons/fa';
import './Cart.css';

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useCartWishlist();

  const handleUpdateQuantity = (item, quantity) => {
    if (quantity < 0) return;
    updateQuantity(item.id, quantity);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {
        cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <div className="cart-content">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} className="cart-item-image" loading="lazy" decoding="async" />
                  <div className="cart-item-details">
                    <h2 className="cart-item-title">{item.title}</h2>
                    <p className="cart-item-price">${item.price.toFixed(2)}</p>
                    <div className="cart-item-quantity-control">
                      <button onClick={() => handleUpdateQuantity(item, item.quantity - 1)} className="quantity-button">
                        <FaMinusCircle />
                      </button>
                      <span className="item-quantity">{item.quantity}</span>
                      <button onClick={() => handleUpdateQuantity(item, item.quantity + 1)} className="quantity-button">
                        <FaPlusCircle />
                      </button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-item-button">
                    <FaTimesCircle />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <h2 className="cart-summary-title">Order Summary</h2>
              <div className="cart-total">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
              <button 
                className="checkout-button"
                onClick={() => navigate('/checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Cart; 
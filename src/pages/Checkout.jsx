import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';
import {
  FaCreditCard,
  FaPaypal,
  FaLock,
  FaCheck,
  FaArrowLeft,
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCartWishlist();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    
    // Payment Information
    paymentMethod: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing (same as shipping by default)
    billingSameAsShipping: true,
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
  });

  const [errors, setErrors] = useState({});

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !orderComplete) {
      navigate('/cart');
    }
  }, [cartItems.length, navigate, orderComplete]);

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateShipping = () => {
    return calculateSubtotal() > 50 ? 0 : 9.99; // Free shipping over $50
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() + calculateShipping();
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'address', 
      'city', 'state', 'zipCode'
    ];

    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (formData.phone && !/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Payment method validation
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber.replace(/\s/g, '')) {
        newErrors.cardNumber = 'Card number is required';
      } else if (formData.cardNumber.replace(/\s/g, '').length < 16) {
        newErrors.cardNumber = 'Card number must be 16 digits';
      }

      if (!formData.expiryDate) {
        newErrors.expiryDate = 'Expiry date is required';
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = 'Please use MM/YY format';
      }

      if (!formData.cvv) {
        newErrors.cvv = 'CVV is required';
      } else if (formData.cvv.length < 3) {
        newErrors.cvv = 'CVV must be 3-4 digits';
      }

      if (!formData.cardName.trim()) {
        newErrors.cardName = 'Cardholder name is required';
      }
    }

    // Billing validation if different from shipping
    if (!formData.billingSameAsShipping) {
      const billingFields = ['billingAddress', 'billingCity', 'billingState', 'billingZipCode'];
      billingFields.forEach(field => {
        if (!formData[field].trim()) {
          newErrors[field] = `${field.replace('billing', '').charAt(0).toUpperCase() + field.replace('billing', '').slice(1)} is required`;
        }
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      cardNumber: formatted
    }));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setFormData(prev => ({
      ...prev,
      expiryDate: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    // Simulate order processing
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate order ID
      const newOrderId = 'ORD-' + Date.now().toString().slice(-6);
      setOrderId(newOrderId);
      
      // Clear cart and show success
      clearCart();
      setOrderComplete(true);
      
    } catch (error) {
      console.error('Order processing failed:', error);
      alert('Order processing failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="checkout-container">
        <div className="order-success">
          <div className="success-icon">
            <FaCheck />
          </div>
          <h1>Order Confirmed!</h1>
          <p className="order-id">Order ID: {orderId}</p>
          <p className="success-message">
            Thank you for your purchase! We've sent a confirmation email to {formData.email}.
            Your order will be processed and shipped within 1-2 business days.
          </p>
          <div className="success-actions">
            <button 
              onClick={() => navigate('/')} 
              className="continue-shopping-btn"
            >
              Continue Shopping
            </button>
            <button 
              onClick={() => navigate('/products')} 
              className="view-products-btn"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <div className="empty-cart-redirect">
          <h1>Your cart is empty</h1>
          <p>Add some items to your cart before proceeding to checkout.</p>
          <button onClick={() => navigate('/products')} className="shop-now-btn">
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <button onClick={() => navigate('/cart')} className="back-to-cart-btn">
          <FaArrowLeft />
          Back to Cart
        </button>
        <h1>Checkout</h1>
      </div>

      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          {/* Shipping Information */}
          <section className="form-section">
            <h2>
              <FaMapMarkerAlt />
              Shipping Information
            </h2>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={errors.firstName ? 'error' : ''}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={errors.lastName ? 'error' : ''}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="address">Street Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className={errors.address ? 'error' : ''}
                placeholder="Enter your street address"
              />
              {errors.address && <span className="error-message">{errors.address}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={errors.city ? 'error' : ''}
                  placeholder="Enter your city"
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="state">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={errors.state ? 'error' : ''}
                  placeholder="Enter your state"
                />
                {errors.state && <span className="error-message">{errors.state}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code *</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={errors.zipCode ? 'error' : ''}
                  placeholder="Enter ZIP code"
                />
                {errors.zipCode && <span className="error-message">{errors.zipCode}</span>}
              </div>
            </div>
          </section>

          {/* Payment Information */}
          <section className="form-section">
            <h2>
              <FaCreditCard />
              Payment Information
            </h2>

            <div className="payment-methods">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={handleInputChange}
                />
                <FaCreditCard />
                Credit/Debit Card
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleInputChange}
                />
                <FaPaypal />
                PayPal
              </label>
            </div>

            {formData.paymentMethod === 'credit' && (
              <>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number *</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleCardNumberChange}
                    className={errors.cardNumber ? 'error' : ''}
                    placeholder="1234 5678 9012 3456"
                    maxLength="19"
                  />
                  {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="expiryDate">Expiry Date *</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleExpiryChange}
                      className={errors.expiryDate ? 'error' : ''}
                      placeholder="MM/YY"
                      maxLength="5"
                    />
                    {errors.expiryDate && <span className="error-message">{errors.expiryDate}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV *</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className={errors.cvv ? 'error' : ''}
                      placeholder="123"
                      maxLength="4"
                    />
                    {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cardName">Cardholder Name *</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className={errors.cardName ? 'error' : ''}
                    placeholder="Name on card"
                  />
                  {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                </div>
              </>
            )}

            {formData.paymentMethod === 'paypal' && (
              <div className="paypal-info">
                <p>You will be redirected to PayPal to complete your payment.</p>
              </div>
            )}
          </section>

          <button 
            type="submit" 
            className="place-order-btn"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="spinner"></div>
                Processing Order...
              </>
            ) : (
              <>
                <FaLock />
                Place Order - ${calculateTotal().toFixed(2)}
              </>
            )}
          </button>
        </form>

        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          
          <div className="order-items">
            {cartItems.map(item => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.title} className="order-item-image" />
                <div className="order-item-details">
                  <h4>{item.title}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
                <span className="order-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="order-totals">
            <div className="total-line">
              <span>Subtotal:</span>
              <span>${calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="total-line">
              <span>Shipping:</span>
              <span>
                {calculateShipping() === 0 ? 'FREE' : `$${calculateShipping().toFixed(2)}`}
              </span>
            </div>
            <div className="total-line">
              <span>Tax:</span>
              <span>${calculateTax().toFixed(2)}</span>
            </div>
            <div className="total-line total-final">
              <span>Total:</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>
          </div>

          {calculateSubtotal() > 50 && (
            <div className="free-shipping-notice">
              <FaCheck />
              You qualify for FREE shipping!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;

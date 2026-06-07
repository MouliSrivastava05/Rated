import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartWishlist } from '../context/CartWishlistContext';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart, setIsCartOpen } = useCartWishlist();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    paymentMethod: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (cartItems.length === 0 && !orderComplete) {
      navigate('/products');
    }
  }, [cartItems.length, navigate, orderComplete]);

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const calculateTax = () => calculateSubtotal() * 0.08;
  const calculateShipping = () => (calculateSubtotal() > 50 ? 0 : 9.99);
  const calculateTotal = () => calculateSubtotal() + calculateTax() + calculateShipping();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipCode'].forEach(field => {
      if (!formData[field].trim()) newErrors[field] = 'Required';
    });
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber.replace(/\s/g, '')) newErrors.cardNumber = 'Required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Required';
      if (!formData.cvv) newErrors.cvv = 'Required';
      if (!formData.cardName.trim()) newErrors.cardName = 'Required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const parts = [];
    for (let i = 0; i < v.length; i += 4) parts.push(v.substring(i, i + 4));
    return parts.join(' ');
  };

  const handleCardNumberChange = (e) => {
    setFormData(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) value = value.substring(0, 2) + '/' + value.substring(2, 4);
    setFormData(prev => ({ ...prev, expiryDate: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setOrderId('ORD-' + Date.now().toString().slice(-6));
      clearCart();
      setOrderComplete(true);
    } catch (error) {
      console.error('Order processing failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="checkout-page">
        <div className="checkout-success">
          <h1 className="font-serif">Order Confirmed</h1>
          <p className="font-sans text-sm checkout-order-id">{orderId}</p>
          <p className="font-sans text-sm checkout-success-msg">
            Confirmation sent to {formData.email}.
          </p>
          <button onClick={() => navigate('/')} className="checkout-btn font-sans text-sm btn-primary">
            Continue
          </button>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) return null;

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <button
          type="button"
          className="checkout-back font-sans text-label"
          onClick={() => { setIsCartOpen(true); navigate('/'); }}
        >
          ← Back
        </button>
        <h1 className="font-serif">Checkout</h1>
      </header>

      <div className="checkout-layout">
        <form onSubmit={handleSubmit} className="checkout-form">
          <section className="checkout-section">
            <h2 className="font-sans text-label">Shipping</h2>
            <div className="checkout-row">
              <div className="checkout-field">
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First name" className={errors.firstName ? 'error' : ''} />
              </div>
              <div className="checkout-field">
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last name" className={errors.lastName ? 'error' : ''} />
              </div>
            </div>
            <div className="checkout-row">
              <div className="checkout-field">
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className={errors.email ? 'error' : ''} />
              </div>
              <div className="checkout-field">
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className={errors.phone ? 'error' : ''} />
              </div>
            </div>
            <div className="checkout-field">
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className={errors.address ? 'error' : ''} />
            </div>
            <div className="checkout-row three">
              <div className="checkout-field">
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className={errors.city ? 'error' : ''} />
              </div>
              <div className="checkout-field">
                <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="State" className={errors.state ? 'error' : ''} />
              </div>
              <div className="checkout-field">
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="ZIP" className={errors.zipCode ? 'error' : ''} />
              </div>
            </div>
          </section>

          <section className="checkout-section">
            <h2 className="font-sans text-label">Payment</h2>
            <div className="checkout-payment-options">
              <label className="checkout-payment-option">
                <input type="radio" name="paymentMethod" value="credit" checked={formData.paymentMethod === 'credit'} onChange={handleInputChange} />
                <span>Card</span>
              </label>
              <label className="checkout-payment-option">
                <input type="radio" name="paymentMethod" value="paypal" checked={formData.paymentMethod === 'paypal'} onChange={handleInputChange} />
                <span>PayPal</span>
              </label>
            </div>

            {formData.paymentMethod === 'credit' && (
              <>
                <div className="checkout-field">
                  <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleCardNumberChange} placeholder="Card number" maxLength="19" className={errors.cardNumber ? 'error' : ''} />
                </div>
                <div className="checkout-row">
                  <div className="checkout-field">
                    <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleExpiryChange} placeholder="MM/YY" maxLength="5" className={errors.expiryDate ? 'error' : ''} />
                  </div>
                  <div className="checkout-field">
                    <input type="text" name="cvv" value={formData.cvv} onChange={handleInputChange} placeholder="CVV" maxLength="4" className={errors.cvv ? 'error' : ''} />
                  </div>
                </div>
                <div className="checkout-field">
                  <input type="text" name="cardName" value={formData.cardName} onChange={handleInputChange} placeholder="Name on card" className={errors.cardName ? 'error' : ''} />
                </div>
              </>
            )}

            {formData.paymentMethod === 'paypal' && (
              <p className="font-sans text-sm checkout-paypal-note">You will be redirected to PayPal.</p>
            )}
          </section>

          <button type="submit" className="checkout-btn font-sans text-sm btn-primary" disabled={isProcessing}>
            {isProcessing ? 'Processing...' : `Place Order — $${calculateTotal().toFixed(2)}`}
          </button>
        </form>

        <aside className="checkout-summary">
          <h2 className="font-sans text-label">Summary</h2>
          <div className="checkout-items">
            {cartItems.map(item => (
              <div key={item.id} className="checkout-item">
                <img src={item.image} alt={item.title} className="checkout-item-image" />
                <div className="checkout-item-info">
                  <p className="font-serif">{item.title}</p>
                  <span className="font-sans text-xs">Qty {item.quantity}</span>
                </div>
                <span className="font-sans text-sm">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="checkout-totals font-sans text-sm">
            <div className="checkout-total-line"><span>Subtotal</span><span>${calculateSubtotal().toFixed(2)}</span></div>
            <div className="checkout-total-line"><span>Shipping</span><span>{calculateShipping() === 0 ? 'Free' : `$${calculateShipping().toFixed(2)}`}</span></div>
            <div className="checkout-total-line"><span>Tax</span><span>${calculateTax().toFixed(2)}</span></div>
            <div className="checkout-total-line checkout-total-final"><span>Total</span><span>${calculateTotal().toFixed(2)}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Checkout;

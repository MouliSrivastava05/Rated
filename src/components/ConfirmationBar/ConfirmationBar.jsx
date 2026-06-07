import React from 'react';
import { useCartWishlist } from '../../context/CartWishlistContext';
import './ConfirmationBar.css';

const ConfirmationBar = () => {
  const { confirmationMessage } = useCartWishlist();

  return (
    <div className={`confirmation-bar ${confirmationMessage ? 'visible' : ''}`}>
      <span className="font-sans text-sm">{confirmationMessage}</span>
    </div>
  );
};

export default ConfirmationBar;

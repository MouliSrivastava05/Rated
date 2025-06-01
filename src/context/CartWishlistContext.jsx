import React, { createContext, useState, useContext } from 'react';

const CartWishlistContext = createContext();

export const useCartWishlist = () => useContext(CartWishlistContext);

export const CartWishlistProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: quantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const toggleLike = (product) => {
    setLikedItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.filter(item => item.id !== product.id);
      } else {
        return [...prevItems, product];
      }
    });
  };

  const isLiked = (productId) => {
    return likedItems.some(item => item.id === productId);
  };

  return (
    <CartWishlistContext.Provider value={{
      cartItems,
      likedItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleLike,
      isLiked
    }}>
      {children}
    </CartWishlistContext.Provider>
  );
}; 
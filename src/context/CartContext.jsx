// CartContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);



  const addToCart = (itemP) => {
    setCartItems(() => {

      const existing = cartItems.find((item) => item.id === itemP.id);
      if (existing) {
        return cartItems.map((item) =>
          item.id === itemP.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...cartItems, { ...itemP, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(() => cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCartItems(() =>
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);





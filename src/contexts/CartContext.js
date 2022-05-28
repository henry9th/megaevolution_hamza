import { createContext, useContext, useState } from 'react';
// import creatorsMockData from '../components/components/MarketingHomePage/creatorsMockData';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const CART_LIMIT = 50;
  const [cartItems, setCartItems] = useState([]);
  const [tempCartItems, setTempCartItems] = useState([]);

  const addToCart = (item) => {
    if (!inCart(item.id) && cartItems.length < CART_LIMIT) {
      setCartItems([...cartItems, item]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // remove from cart and add to temp
  const removeTemp = (id) => {
    setTempCartItems((prev) => [
      ...prev,
      cartItems.find((item) => item.id === id),
    ]);
    removeFromCart(id);
  };

  const undoTempRemovals = () => {
    setCartItems([...cartItems, ...tempCartItems]);
    setTempCartItems([]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeSelectedIds = (ids) => {
    setCartItems((prev) => prev.filter((item) => !ids.includes(item.id)));
  };

  const inCart = (id) => cartItems.find((item) => item.id === id);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        removeSelectedIds,
        inCart,
        cartLimit: CART_LIMIT,
        removeTemp,
        undoTempRemovals,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    removeSelectedIds,
    inCart,
    cartLimit,
    removeTemp,
    undoTempRemovals,
  } = context;

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    removeSelectedIds,
    inCart,
    cartLimit,
    removeTemp,
    undoTempRemovals,
  };
};

export { CartProvider, useCart };

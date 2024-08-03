import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (property) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === property.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === property.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...property, quantity: 1 }];
    });
  };

  const handleUpdateCart = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => item.id !== id)
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home onBook={handleAddToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onUpdateCart={handleUpdateCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <CheckoutPage
              cartItems={cartItems}
              totalAmount={calculateTotal()}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

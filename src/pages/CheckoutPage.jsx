// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './CheckoutPage.css';

const CheckoutPage = ({ cartItems, totalAmount }) => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setPaymentSuccess(true);
  };

  const handleBackToHome = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="checkout-page">
      {!paymentSuccess ? (
        <>
          <h1>Checkout</h1>
          <form onSubmit={handleSubmit} className="checkout-form">
            <h2>Booking Details</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={contactInfo.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contactInfo.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                id="address"
                name="address"
                value={contactInfo.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-button">Pay Now</button>
            </div>
          </form>
        </>
      ) : (
        <div className="success-message">
          <h1>Payment Successful!</h1>
          <button onClick={handleBackToHome} className="home-button">Go to Home Page</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './Thankyoupage.css'; // Import the CSS file

const Thankyoupage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productName = queryParams.get('product');

  return (
    <div className="thank-you-container">
      <h1>Thank You!</h1>
      <p>Thank you for your interest in {productName}!</p>
      <p>We appreciate your visit and hope to serve you again soon.</p>
    </div>
  );
};

export default Thankyoupage;

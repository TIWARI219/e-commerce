// src/components/ShippingDetail.js
import React, { useState } from 'react';

const ShippingDetail = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add shipping info submission logic here
  };

  return (
    <div>
      <h2>Shipping Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={shippingInfo.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={shippingInfo.address} onChange={handleInputChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={shippingInfo.city} onChange={handleInputChange} required />
        </div>
        {/* Add more input fields for shipping info */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetail;

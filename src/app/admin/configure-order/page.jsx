"use client";

import { useState, useEffect } from "react";

const ConfigureOrder = () => {
  const [cakes, setCakes] = useState([]);
  const [selectedCake, setSelectedCake] = useState("");
  const [customCake, setCustomCake] = useState("");
  const [deliveryPartner, setDeliveryPartner] = useState("");
  const [address, setAddress] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const storedCakes = JSON.parse(localStorage.getItem("addedProducts")) || [];
    setCakes(storedCakes);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      cake: selectedCake || customCake,
      deliveryPartner,
      address,
      customerName,
      phoneNumber,
      price,
    };
    console.log("Order Placed:", order);
    alert("Order has been placed successfully!");
  };

  return (
    <div className="p-4 max-w-2xxl m-6  bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Configure Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">Choose Cake:
          <select 
            className="w-full p-2 border rounded mt-1" 
            value={selectedCake} 
            onChange={(e) => setSelectedCake(e.target.value)}
          >
            <option value="">Select a cake</option>
            {cakes.map((cake, index) => (
              <option key={index} value={cake.name}>{cake.name}</option>
            ))}
          </select>
        </label>
        
        <label className="block">Or Add Custom Cake:
          <input 
            type="text" 
            className="w-full p-2 border rounded mt-1" 
            placeholder="Custom Cake Name"
            value={customCake} 
            onChange={(e) => setCustomCake(e.target.value)}
          />
        </label>
        
        <label className="block">Choose Delivery Partner:
          <select 
            className="w-full p-2 border rounded mt-1" 
            value={deliveryPartner} 
            onChange={(e) => setDeliveryPartner(e.target.value)}
          >
            <option value="">Select Partner</option>
            <option value="DHL">DHL</option>
            <option value="FedEx">FedEx</option>
            <option value="Local Courier">Local Courier</option>
          </select>
        </label>
        
        <label className="block">Address:
          <input 
            type="text" 
            className="w-full p-2 border rounded mt-1" 
            placeholder="Enter address"
            value={address} 
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        
        <label className="block">Customer Name:
          <input 
            type="text" 
            className="w-full p-2 border rounded mt-1" 
            placeholder="Enter customer name"
            value={customerName} 
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>
        
        <label className="block">Phone Number:
          <input 
            type="tel" 
            className="w-full p-2 border rounded mt-1" 
            placeholder="Enter phone number"
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        
        <label className="block">Price:
          <input 
            type="number" 
            className="w-full p-2 border rounded mt-1" 
            placeholder="Enter price"
            value={price} 
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default ConfigureOrder;

import React, { useState } from 'react';
import '../styles/RideForm.css';

const RideForm = ({ onCreate }) => {
    
  const [form, setForm] = useState({ 
    name: '', 
    car: '', 
    time: '', 
    source: '', 
    destination: '' 
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('driverRide', JSON.stringify(form));
    onCreate(form);
     alert('Ride created successfully!');
  };

  return (
    <div className="ride-form-container">
      <h2>Create a Ride</h2>
      <form onSubmit={handleSubmit} className="ride-form">
        <div className="form-group">
          <label>Driver Name</label>
          <input 
            name="name" 
            placeholder="Enter your name" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Car Model</label>
          <input 
            name="car" 
            placeholder="Enter car model" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Departure Time</label>
          <input 
            type="time" 
            name="time" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Source</label>
          <input 
            name="source" 
            placeholder="Starting point" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Destination</label>
          <input 
            name="destination" 
            placeholder="Destination" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <button type="submit" className="submit-btn">Create Ride</button>
      </form>
    </div>
  );
};

export default RideForm;


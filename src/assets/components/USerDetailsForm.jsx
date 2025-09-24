import React, { useState } from 'react';

const USerDetailsForm = ({ setDriverSuggestions }) => {
  const [userDetails, setUserDetails] = useState({
    startPoint: '',
    destination: '',
    preferredTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would call an API to get driver suggestions
    const mockDrivers = [
      { id: 1, name: 'Driver 1', car: 'Sedan', time: '10:00 AM' },
      { id: 2, name: 'Driver 2', car: 'SUV', time: '10:30 AM' },
    ];
    setDriverSuggestions(mockDrivers); // Passing mock data to the parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Starting Point:</label>
        <input
          type="text"
          name="startPoint"
          value={userDetails.startPoint}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Destination:</label>
        <input
          type="text"
          name="destination"
          value={userDetails.destination}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Preferred Time:</label>
        <input
          type="time"
          name="preferredTime"
          value={userDetails.preferredTime}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Find Drivers</button>
    </form>
  );
};

export default USerDetailsForm;
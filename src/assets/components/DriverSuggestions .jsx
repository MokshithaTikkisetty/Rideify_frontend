import React from 'react';
import { useLocation } from 'react-router-dom';

const DriverSuggestions = () => {
  const location = useLocation();
  const driverSuggestions = location.state?.driverSuggestions || [];

  return (
    <div>
      <h2>Available Drivers</h2>
      {driverSuggestions.length === 0 ? (
        <p>No drivers found. Try adjusting your search.</p>
      ) : (
        <ul>
          {driverSuggestions.map((driver) => (
            <li key={driver.id}>
              <h3>{driver.name}</h3>
              <p>Car: {driver.car}</p>
              <p>Time: {driver.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DriverSuggestions;
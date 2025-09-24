import React, { useEffect, useState } from 'react';
 import '../styles/DriverDashboard.css';
const DriverDashboard = () => {

  const [request, setRequest] = useState(null);

  useEffect(() => {
    const req = JSON.parse(localStorage.getItem('requestedDriver'));
    setRequest(req);
  }, []);

  const respond = (status) => {
    localStorage.setItem('rideStatus', status);
    alert(`You ${status === 'accept' ? 'accepted' : 'rejected'} the request.`);
  };

  if (!request) return <p>No ride requests yet.</p>;

  return (
    <div>
      <h2>Incoming Ride Request</h2>
      <p>User requested ride from {request.source} to {request.destination}</p>
      <button >Accept</button>
      <button >Reject</button>
    </div>
  );
};

export default DriverDashboard;











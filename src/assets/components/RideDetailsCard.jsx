import React from 'react';

const RideDetailsCard = () => {
  const styles = {
    card: {
      maxWidth: '400px',
      margin: '40px auto',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fff',
    },
    section: {
      marginBottom: '20px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    mapPlaceholder: {
      height: '150px',
      backgroundColor: '#eee',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#777',
      borderRadius: '8px',
    },
    button: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.section}>
        <h2 style={styles.title}>Driver Info</h2>
        <p>Vasudha- 4.9★</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>Route Map Preview</h2>
        <div style={styles.mapPlaceholder}>[Map Placeholder]</div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.title}>Time, Fare, Preferences</h2>
        <p>Pickup: 8:00 AM</p>
        
        <p>Preferences: No smoking, AC on</p>
      </div>

      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Request to Join
      </button>
    </div>
  );
};

export default RideDetailsCard;
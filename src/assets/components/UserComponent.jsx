// import React, { useState } from 'react';
// import UserDetailsForm from './UserDetailsForm';
// import DriverSuggestions from './DriverSuggestions';

// const UserComponent = () => {
//   const [driverSuggestions, setDriverSuggestions] = useState([]);

//   return (
//     <div>
//       <h1>Find a Ride</h1>
//       <UserDetailsForm setDriverSuggestions={setDriverSuggestions} />
//       <DriverSuggestions driverSuggestions={driverSuggestions} />
//     </div>
//   );
// };

// export default UserComponent;


// import React, { useState } from 'react';
// import UserDetailsForm from './UserDetailForm';
// import DriverSuggestions from './DriverSuggestions';

// const UserComponent = () => {
//   const [driverSuggestions, setDriverSuggestions] = useState([]);

//   // Simulating data after the form submission (mock data)
//   const handleFormSubmit = (userDetails) => {
//     // Example driver suggestions based on form details
//     const mockDrivers = [
//       { id: 1, name: 'Driver 1', car: 'Sedan', time: '10:00 AM' },
//       { id: 2, name: 'Driver 2', car: 'SUV', time: '10:30 AM' },
//     ];
//     setDriverSuggestions(mockDrivers); // Set the mock data to state
//   };

//   return (
//     <div>
//       <h1>Find a Ride</h1>
//       <UserDetailsForm setDriverSuggestions={handleFormSubmit} />
//       <DriverSuggestions driverSuggestions={driverSuggestions} />
//     </div>
//   );
// };

// export default UserComponent;

// import React, { useState } from 'react';
// import UserDetailsForm from './UserDetailForm';
// import DriverSuggestions from './DriverSuggestions';
// import DriverView from './DriverView';
// import ConfirmedRide from './ConfirmedRide';
// import EditDriverProfile from './EditDriverProfile';

// const UserComponent = () => {
//   const [driverSuggestions, setDriverSuggestions] = useState([]);
//   const [selectedOffer, setSelectedOffer] = useState(null);
//   const [rideStatus, setRideStatus] = useState('pending'); // 'pending', 'accepted', 'rejected'
//   const [driverProfile, setDriverProfile] = useState({
//     name: 'Driver 1',
//     car: 'Sedan',
//     time: '10:00 AM',
//     phone: '9876543210'
//   });

//   const handleFormSubmit = (userDetails) => {
//     const mockDrivers = [
//       { id: 1, name: 'Driver 1', car: 'Sedan', time: '10:00 AM' },
//       { id: 2, name: 'Driver 2', car: 'SUV', time: '10:30 AM' },
//     ];
//     setDriverSuggestions(mockDrivers);
//     setSelectedOffer(null);
//     setRideStatus('pending');
//   };

//   const handleSelectDriver = (driver) => {
//     setSelectedOffer(driver);
//     setRideStatus('pending');
//   };

//   const handleDriverResponse = (response) => {
//     setRideStatus(response); // 'accepted' or 'rejected'
//   };

//   const handleEditDriver = (updatedProfile) => {
//     setDriverProfile(updatedProfile);
//   };

//   return (
//     <div>
//       <h1>Find a Ride</h1>
//       <UserDetailsForm setDriverSuggestions={handleFormSubmit} />
//       <DriverSuggestions driverSuggestions={driverSuggestions} onSelectDriver={handleSelectDriver} />
//       <DriverView selectedOffer={selectedOffer} onRespond={handleDriverResponse} />
//       <ConfirmedRide selectedOffer={selectedOffer} rideStatus={rideStatus} />
//       <EditDriverProfile profile={driverProfile} onSave={handleEditDriver} />
//     </div>
//   );
// };

// export default UserComponent;
// import React, { useState } from 'react';
// import '../styles/UserComponent.css';


// const UserComponent = ({ onFind }) => {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');

//   return (
//     <div>
//       <h2>Enter Your Route</h2>
//       <input placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} />
//       <input placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
//       <button onClick={() => onFind(source, destination)}>Find Drivers</button>
//     </div>
//   );
// };

// export default UserComponent;


import { Link} from 'react-router-dom';
import React, { useState } from 'react';

import '../styles/UserComponent.css';

const UserComponent = ({ onSubmit }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(source, destination);
  };

  return (
    <div className="user-component-container">
      <h2>Enter Your Route</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Source</label>
          <input 
            placeholder="Starting point" 
            value={source} 
            onChange={(e) => setSource(e.target.value)} 
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Destination</label>
          <input 
            placeholder="Destination" 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)} 
            required 
          />
        </div>
        

     <Link to='/ridedetailscard'><button>Find Drivers</button></Link> 
        {/* <button type="submit">Find Drivers</button> */}
      </form>
    </div>
  );
};

export default UserComponent;
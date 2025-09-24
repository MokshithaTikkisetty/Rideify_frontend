 import {Link, Route,Routes} from 'react-router-dom';


import Rideexplore from './Rideexplore';
import Ride from './Ride';
import Ridelogin from './Ridelogin';
import Ridesignup from './Ridesignup';
import Ridebook from './Ridebook';
import RidePrePayment from './RidePrePayment';
import Ridepayment from './Ridepayment';
import Ridecard from './Ridecard';
import RideTransactionSuccess from './RideTransactionSuccess';

const Ridehome = () => {
  return (
    
      <Routes>
        {/* Home/Explore page */}
        <Route path="/" element={<Rideexplore />} />
        
        {/* Main ride page */}
        <Route path="/ride" element={<Ride />} />
        
        {/* Authentication pages */}
        <Route path="/login" element={<Ridelogin />} />
        <Route path="/signup" element={<Ridesignup />} />
        
        {/* Ride booking flow */}
        <Route path="/book" element={<Ridebook />} />
        <Route path="/prepayment" element={<RidePrePayment />} />
        <Route path="/payment" element={<Ridepayment />} />
        <Route path="/card" element={<Ridecard />} />
        <Route path="/success" element={<RideTransactionSuccess />} />
      </Routes>
  
  );
};

export default Ridehome;

















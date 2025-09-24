

import { Link } from 'react-router-dom';
import '../styles/Ridepayment.css';



const Ridepayment = () => {
  
  return (
    <div className="container">
    <div className="header">
      {/* <h1>11.11</h1><br /> */}
      <h2>Payment Method</h2><br />
      {/* <p>Buy pass & save up to $168 on auto rides</p><br /> */}
    </div>
    <div className="payment-methods">
      <div className="method">



  <div className="method">
         <Link to='/ridecard'> <a href="#" >
            <i className="fas fa-credit-card"></i>CREDIT
          </a>
          </Link>
                           
        </div>

<div className="method">
  <a href="#" >
    <i className="fas fa-credit-card"></i>DEBIT
  </a>
</div>

      <a href="#"><i className="fas fa-wallet"></i> Radifiy Wallet</a>
        <button>ADD MONEY</button>
      </div>

    
      
 <div className="method">
         <Link to='/ridephonepay'> <a href="#" >
            <i className="fas fa-qrcode"></i>UPI
          </a>
          </Link>
                           
        </div>

      <div className="method">
        <a href="#"><i className="fab fa-google"></i> GPay</a>
      </div>
      
      <div className="method">
        <a href="#"><i className="fab fa-phoenix-framework"></i> PhonePe</a>
      </div>

      
    </div>
  </div>

  
  );
}

export default Ridepayment;






















// import { Link } from 'react-router-dom';

// import '../styles/Ridepayment.css';

// const Ridepayment = () => {

  
//   return (
//     <div className="container">
//       <div className="header">
//         <h1>11.11</h1><br />
//         <h2>Payment Method</h2><br />
//         <p>Buy pass & save up to $168 on auto rides</p>
//       </div>
//       <div className="payment-methods">
//         <div className="method">
//          <Link to='/ridecard'> <a href="#" >
//             <i className="fas fa-credit-card"></i>CREDIT
//           </a>
//           </Link>
                           
//         </div>
//         <div className="method">
//           <a href="#" >
//             <i className="fas fa-credit-card"></i>DEBIT
//           </a>
//         </div>
      
//       </div>
//     </div>
//   );
// };

// export default Ridepayment;
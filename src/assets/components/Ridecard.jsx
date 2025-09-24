

import { Link } from 'react-router-dom';
import '../styles/Ridecard.css';


const Ridecard = () => {

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2 className="brand">stripe</h2>
        <div className="subscription-box">
          <h2>Templatus</h2>
          <p className="price">Subscription fee <br /> <span>$96.00 /month</span></p>
          <hr />
          <div className="price-details">
            <p>Platform basic <span>$96.00</span></p>
            <p>Subtotal <span>$96.00</span></p>
            <p>Tax <span>$0.00</span></p>
            <hr />
            <p className="total">Total due today <span>$96.00</span></p>
          </div>
        </div>
      </div>
      <div className="checkout-right">
        <h2>Contact Information</h2>
        <input type="email" placeholder="Email" className="input-field" />
        <h2>Payment Method</h2>
        <input type="text" placeholder="Card number" className="input-field" />
        <div className="card-details">
          <input type="text" placeholder="MM / YY" className="input-field small" />
          <input type="text" placeholder="CVC" className="input-field small" />
        </div>
        <input type="text" placeholder="Cardholder name" className="input-field" />
        <select className="input-field">
          <option>Nigeria</option>
          <option>United States</option>
          <option>India</option>
        </select>
        <input type="text" placeholder="Address line 1" className="input-field" />
        <input type="text" placeholder="Address line 2" className="input-field" />
        <div className="location-details">
          <input type="text" placeholder="State" className="input-field small" />
          <input type="text" placeholder="City" className="input-field small" />
          <input type="text" placeholder="Postal code" className="input-field small" />
        </div>
        
        <button className="subscribe-btn" >
 <Link to='/ridetransactionsuccess'>Submit</Link>
        </button>


         
                  
              
      </div>
    </div>
  )
}

export default Ridecard;




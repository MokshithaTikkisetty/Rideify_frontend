
import { Link } from 'react-router-dom';
import '../styles/Ridephonepay.css';
const Ridephonepay = () => {
    return (
      <div>
        <div className="qr-container">
        <div className="qr-header">
  
        <h1>Pay through UPI QR Code</h1>
  
        <div className="qr-image">
        <img src="/images/qr image.png" alt='error' height={"150px"} width={"150px"}></img>
        </div>
  
        <div className="qr-text">
            <strong>Scan and Pay</strong>
            <p>Scan the QR code using any UPI app on your phone</p>
            </div>
         
        </div>
        </div>
  
        <div className="payment-container">
  
          <h2>Enter UPI ID / Mobile No</h2>
  
          <div  className="input-field">
          <input type="text" placeholder="example@upi or mobile number"/><br /><br />
          <a href="#" className="verify-link">Verify VPA</a>
  
          <p className="privacy-text">
          I agree with the <a href="#">Privacy Policy</a> by proceeding with this payment.
        </p>
  
        <div className="amount-text">INR 1750.00 <span>(Total Amount Payable)</span></div><br /><br />
  
        <div className="pay-button">
               <Link to='/ridetransactionsuccess'><button>Make Payment</button></Link> 
      
        <button>Cancel</button>
        </div>
        
        </div>
         
        </div>
        
      </div>
    )
  }
  
  export default Ridephonepay
  
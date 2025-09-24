

import { Link } from 'react-router-dom';
import '../styles/RidePrePayment.css';





const RidePrePayment = () => {
   
    return (
        <div className="pay">
            <section className="header">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.101785740074!2d80.7079268148765!3d16.462487799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb86e76a4c8b%3A0x4c054acbdd5138ef!2sPenamaluru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1619452184572!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>

            <section className="body">
                <section className="bike">
                    <section className="bike_left">
                        <h1>Bike (Fastest)</h1> <br />
                        <p>2 mins away · Drop 11:12 PM</p> <br />
                    </section>
                    <section className="bike_right">
                        <h2>₹229</h2>
                    </section>
                </section>

                <section className="auto">
                    <section className="auto_left">
                        <h1>Auto</h1>
                        <p>2 mins away · Drop 11:12 PM</p>
                    </section>
                    <section className="auto_right">
                        <h2>₹597</h2>
                    </section>
                </section>

                <section className="cab">
                    <section className="cab_left">
                        <h1>Cab Economy</h1> <br />
                        <p>5 mins away · Drop 11:15 PM</p>
                    </section>
                    <section className="cab_right">
                        <h2>₹676</h2>
                    </section>
                </section>

                <section className="cab">
                    <section className="cab_left">
                        <h1>Cab Premium</h1>
                        <p>5 mins away · Drop 11:15 PM</p>
                    </section>
                    <section className="cab_right">
                        <h2>₹696</h2>
                    </section>
                </section>
            </section>

            <section className="footer">
                            
     
              <Link to='/ridepayment'><button>Book Bike</button></Link> 

            </section>
        </div>
    );
};

export default RidePrePayment;





























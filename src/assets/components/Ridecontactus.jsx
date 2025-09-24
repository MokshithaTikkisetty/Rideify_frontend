
import '../styles/Ridecontactus.css';

const Ridecontactus = () => {
  return (
    <section className="contactus">
       
      {/* <div className="image-section left-img">
        <img src="/images/contact1.jpg" alt="Ride Illustration Left" />
      </div>

    
      <div className="image-section right-img">
        <img src="/images/contact2.jpg" alt="Ride Illustration Right" />
      </div> */}
      <div className="form-section">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below:</p>

        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Mobile Number</label>
          <input type="tel" placeholder="Enter your mobile number" required />

          <label>You are a</label>
          <input type="text" placeholder="Select your role" required />

          <label>Comment</label>
          <textarea rows="4" placeholder="Enter your comment" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="info-section">
        <div className="address-block">
          <h3>Registered Office</h3>
          <p>Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh - 522502, India</p>
        </div>
        <div className="address-block">
          <h3>City Office</h3>
          <p>Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh - 522502, India</p>
        </div>
        <div className="address-block">
          <h3>Corporate Office</h3>
          <p>Green Fields, Vaddeswaram, Guntur District, Andhra Pradesh - 522502, India</p>
        </div>
      </div>
    </section>
  );
};

export default Ridecontactus;


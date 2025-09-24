import '../styles/Ridelogin.css';



const Ridelogin = () => {

  return (
    <div className="container">
       <section className="head_image">
            <img src="/images/loginimg.jpg" alt="Logo" height="80" width="80" />
          </section>
      <div className="login-section">
        <h2 className="title">Sign in</h2>
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <a href="#" className="forgot-password">Forgot your password?</a>
        <div className="sign-in-but>ton"><button>SIGN IN</button></div>
      </div>


      <div className="signup-section">
        <h2 className="title">Hello, Friend!</h2>
        <p>Enter your personal details and start your journey with us</p>
        <button className="sign-up-button">SIGN UP</button> 
  
      </div>
    </div>
  );
};

export default Ridelogin;







// import '../styles/Ridelogin.css';

// const Ridelogin = () => {
//   return (
//     <div className="ride-login-container">
//       {/* Left Section with Illustration */}
//       <div className="ride-illustration">
//         <img src="/images/ride-sharing.svg" alt="Ride Sharing" className="illustration-img" />
//       </div>

//       {/* Right Section with Login Form */}
//       <div className="ride-form-section">
//         <div className="profile-icon">
//           <img src="/images/profile.png" alt="Profile" />
//         </div>
//         <h2 className="welcome-text">WELCOME</h2>

//         <input type="text" placeholder="Username" className="input-field" />
//         <input type="password" placeholder="Password" className="input-field" />

//         <div className="form-options">
//           <a href="#" className="forgot-password">Forgot Password?</a>
//         </div>

//         <button className="login-button">LOGIN</button>
//       </div>
//     </div>
//   );
// };

// export default Ridelogin;








// import '../styles/Ridelogin.css';

// const Ridelogin = () => {

  
//   return (
//     <div className="container">
//       <div className="login-section">
//         <h2 className="title">Sign in</h2>
//         <input type="email" placeholder="Email" className="input-field" />
//         <input type="password" placeholder="Password" className="input-field" />
//         <a href="#" className="forgot-password">Forgot your password?</a>
//         <div className="sign-in-button"><button>SIGN IN</button></div>
//       </div>

//       <div className="signup-section">
//         <h2 className="title">Hello, Friend!</h2>
//         <p>Enter your personal details and start your journey with us</p>
//         <button className="sign-up-button" >SIGN UP</button>
//       </div>
//     </div>
//   );
// };

// export default Ridelogin;
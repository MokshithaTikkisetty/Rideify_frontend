// import '../styles/Ridesignup.css';

//  import { useNavigate } from 'react-router-dom';

// const Ridesignup = () => {
//    const navigate = useNavigate();
//   return (
//     <div className="container">
     
//       <div className="welcome-section">
//         <h2 className="title">Welcome Back!</h2>
//         <p>To keep connected with us please login with your personal info</p>
//         {/* <button className="sign-in-button">SIGN IN</button> */}
//         <button className="sign-in-button" onClick={() => navigate('/login')}>SIGN IN</button>
//       </div>

//       <div className="signup-section">
//         <h2 className="title">Create Account</h2>
//         <input type="text" placeholder="Name" className="input-field" />
//         <input type="email" placeholder="Email" className="input-field" />
//         <input type="password" placeholder="Password" className="input-field" />
//         <button className="sign-up-button">SIGN UP</button>
//       </div>
//     </div>
//   );
// };

// export default Ridesignup;



























import { useNavigate } from 'react-router-dom';
import '../styles/Ridesignup.css';

const Ridesignup = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container">
       <section className="head_image">
            <img src="/images/loginimg.jpg" alt="Logo" height="80" width="80" />
          </section>
          
      <div className="welcome-section">
        <h2 className="title">Welcome Back!</h2>
        <p>To keep connected with us please login with your personal info</p>
        <button className="sign-in-button" onClick={() => navigate('/login')}>SIGN IN</button>
      </div>

      <div className="signup-section">
        <h2 className="title">Create Account</h2>
        <input type="text" placeholder="Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        <button className="sign-up-button">SIGN UP</button>
      </div>
    </div>
  );
};

export default Ridesignup;

//  import { Link,Route,Routes} from 'react-router-dom';
//  import '../styles/Rideexplore.css';
// import Rideabout from './Rideabout';
// import Ridesafety from './Ridesafety';
// import Ridecontactus from './Ridecontactus';
// import Ride from './Ride';
//  import Ridelogin from './Ridelogin';
//  import Ridesignup from './Ridesignup';


//  const Rideexplore = () => {

//   return (
//     <div className='vefg'>
//     <div className="video-container">
//        <video autoPlay muted loop className="background-video">
//          <source src="/videos/home video.mp4" type="video/mp4" />
//          Your browser does not support the video tag.
//        </video>
// </div>
//        <div className="overlay-content">

//          <section className="parent" >

//          <section className="header">
//             <section className="header_image">
//              <img src="/images/ridelogo.jpg" alt='error' height="100px" width="100px" />

//             </section>
            
//             <section className="header_menu">
//               <Link to='Rideabout'>About</Link>
//               <Link to='RideSafety'>Safety</Link>
//               <Link to='RideContact'>Contact us</Link>
//             {/* <Link to='Ridelogin'>Login</Link>
//               <Link to='Ridesignup'>Sign-up</Link> */}
              
// <Link to="/login">Login</Link>
// <Link to="/signup">Signup</Link>
//             </section>
//         </section>

//           <section className="body">
//              <section className='middle'>
//               <Routes>
//               <Route path='/about' element={<Rideabout></Rideabout>}></Route>
//                <Route path='/safety' element={<Ridesafety/>}></Route>
//                <Route path='/contact' element={<Ridecontactus/>}></Route>
//                 <Route path='/login' element={<Ridelogin/>}></Route>
//                 <Route path='/signup' element={<Ridesignup/>}></Route>
               
//                </Routes>
               
//                <h1>Two wheels beneath, the sky above—
//                    Every mile echoes freedom and love.
//                </h1><br />
//              </section><br />
//              <div className="button">
//                <Link to='Ride'><button>Explore</button></Link> 
//                  <Routes>
//                   <Route path='/ride' element={<Ride/>}></Route>
//                  </Routes>
//              {/* <button>Explore</button> */}
//              </div>

//            </section>

//          </section>

//        </div>
//      </div>
//    );
//  };



import { Link, Route, Routes } from 'react-router-dom';
import '../styles/Rideexplore.css';
import Rideabout from './Rideabout';
import Ridesafety from './Ridesafety';
import Ridecontactus from './Ridecontactus';
import Ride from './Ride';
import Ridelogin from './Ridelogin';
import Ridesignup from './Ridesignup';

const Rideexplore = () => {
  return (
    <div className="vefg">

      {/* HEADER SECTION - separated from video */}
      <section className="header">
        <div className="header_image">
          {/* <img src="/images/ridelogo.jpg" alt="error" height="100px" width="100px" /> */}
           <img src="/images/rlogo.png" alt="error" height="100px" width="100px" />
        </div>
        <div className="header_menu">
          <Link to="Rideabout">About</Link>
          <Link to="RideSafety">Safety</Link>
          <Link to="RideContact">Contact us</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src="/videos/home video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay-content">
          <section className="parent">
            <section className="body">
              <section className="mid">
                <Routes>
                  <Route path="/about" element={<Rideabout />} />
                  <Route path="/safety" element={<Ridesafety />} />
                  <Route path="/contact" element={<Ridecontactus />} />
                  <Route path="/login" element={<Ridelogin />} />
                  <Route path="/signup" element={<Ridesignup />} />
                </Routes>

                <h1>
                  Two wheels beneath, the sky above—  
                  Every mile echoes freedom and love.
                </h1>
              </section>

              <div className="button">
                <Link to="Ride">
                  <button>Explore</button>
                </Link>
                <Routes>
                  <Route path="/ride" element={<Ride />} />
                </Routes>
              </div>
            </section>
          </section>
        </div>
      </div>

    </div>
  );
};

export default Rideexplore;

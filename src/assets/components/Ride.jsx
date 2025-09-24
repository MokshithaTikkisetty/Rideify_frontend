
// import '../styles/Ride.css';


// const Ride = () => {
  
//   return (
//  <>

// <section className="parent">
    
// <section className="header">
//     <section className="header_image">
//         <img src="/images/logo.jpg" alt='error' height={"80px"} width={"80px"}></img>
//     </section>
//     <section className='header_menu'>
              
//               <a href="#">profile</a>
//             </section>
//   </section>
   
//  <section className="body">

//  <section className='middle'>
//                 <section className="middle_left">
//                     <p>Why wait in traffic when you can ride in comfort? Tap, ride, and arrive—hassle-free!</p>
//                     <input type="button" value="Offer a Ride" />
//                     <input type="button" value="Book Your Ride"  />
 
//                 </section>
//                 <section className="middle_right">
//                     <img src="/images/cute.jpg"></img>
//                 </section>
//                 </section>

//                 <section className='middle'>
//                  <section className="middle_left">       
//       <h2>Know Us Better</h2>
//       <p>In 2017, Rapido started as a Bike-Taxi service in India and now holds a 70% market share. We are expanding in auto services, cab markets, and intra-city delivery with Rapido Parcel.</p>
//       <section className="middle_right">
//         <img src="/images/know us about.jpg" alt="Rapido Riders" width={300} height={300}  />
//       </section>
//     </section> 
//     </section>


//     <section className='middle'>
//     <div className="middle_left">
//         <h2>Ride with friends seamlessly</h2>
//         <p>Set up a group ride in the Raidify app, invite your friends, and arrive together.</p>
//         <div className="middle_right">
//         <img src="/images/ride with friend.jpg" alt="Group Ride"  height={300} width={300}/>
//         </div>
//       </div>
//       </section>



//       <div className="video-container">
//           <video controls width="1500">
//             <source src="/videos/map.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div> 

//         <h1>What's in it for you</h1>
//         <div className="toggle">
//             <button id="customers" class="active">Customers</button>
//             <button id="captains">Captains</button>
//         </div>
//            <div className="text-container">
//            <div className="service">
//            <img src="/images/bike.png" alt="noimage" height={180} width={180}></img>
//                 <h2>India’s largest Bike-Taxi</h2>
//                 <p>Cut through traffic, reach on time and save money. With Rapido Bike-Taxis, it’s that simple.</p>
//            </div>
//             <div className="service">
//             <img src="/images/auto.png" alt="noimage" height={180} width={180}></img>
//                 <h2>5-minute Auto</h2>
//                 <p>Never wait for an auto ride again! Get a Rapido Auto within just 5 minutes! Anytime. Anywhere.</p>
//             </div>
//             <div className="service">
//             <img src="/images/car.png" alt="noimage" height={180} width={180}></img>
//                 <h2>Lowest Priced Cabs</h2>
//                 <p>More wheels. More comfort. And lower price than any other cab out there.</p>
//             </div>


//             <footer className="footer">
//   <div className="footer-content">
//     <div className="footer-section about">
//       <h3>Raidify</h3>
//       <p>Your go-to app for easy and affordable rides. Safe. Fast. Reliable.</p>
//     </div>

//     <div className="footer-section links">
//       <h4>Quick Links</h4>
//       <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">Book a Ride</a></li>
//         <li><a href="#">Offer a Ride</a></li>
//         <li><a href="#">Profile</a></li>
//       </ul>
//     </div>

//     <div className="footer-section contact">
//       <h4>Contact Us</h4>
//       <p>Email: support@raidify.com</p>
//       <p>Phone: +91-9876543210</p>
//     </div>
//   </div>
//   <div className="footer-bottom">
//     <p>&copy; 2025 Raidify. All rights reserved.</p>
//   </div>
// </footer>

//          </div>

//          </section>
// </section>
//  </>
//   )
// }

// export default Ride































// // import { useNavigate } from 'react-router-dom';
// // import '../styles/Ride.css';

// // const Ride = () => {
// //   const navigate = useNavigate();
  
// //   return (
// //     <>
// //       <section className="parent">
// //         <section className="header">
// //           <section className="header_image">
// //             <img src="/images/logo.jpg" alt='error' height={"80px"} width={"80px"}></img>
// //           </section>
// //           <section className='header_menu'>
// //             <a href="#" onClick={() => navigate('/login')}>Login</a>
// //             <a href="#" onClick={() => navigate('/signup')}>Signup</a>
// //             <a href="#">profile</a>
// //           </section>
// //         </section>
        
// //         <section className="body">
// //           <section className='middle'>
// //             <section className="middle_left">
// //               <p>Why wait in traffic when you can ride in comfort? Tap, ride, and arrive—hassle-free!</p>
// //               <input type="button" value="Offer a Ride" />
// //               <input 
// //                 type="button" 
// //                 value="Book Your Ride" 
// //                 onClick={() => navigate('/ridebook')} 
// //               />
// //             </section>
// //             <section className="middle_right">
// //               <img src="/images/cute.jpg" alt="Ride"></img>
// //             </section>
// //           </section>

// //           {/* Rest of your component remains the same */}
// //         </section>
// //       </section>
// //     </>
// //   );
// // };

// // export default Ride;































import { Link } from 'react-router-dom';

import '../styles/Ride.css';
import Ridebook from './Ridebook';
import ChooseAction from './ChooseAction';


const Ride = () => {


  return (
    <>
      <section className="parent">
      
        <section className="header">
          <section className="header_image">
            <img src="/images/rlogo.png" alt="Logo" height="80" width="80" />
          </section>
          <section className="header_menu">
            
            <a href="#">Profile</a>
          </section>
        </section> 

        <section className="body">

  <h1>
    <span className="word1">Rideify connects people, saves money, and reduces traffic, turning every journey into a shared experience.</span> 
  
  </h1>


{/* <h1>
  Ride-sharing connects people, saves money, and reduces traffic, turning every journey into a shared experience.
</h1> */}
          <section className="middle">
            <section className="middle_left">
              <p>Why wait in traffic when you can ride in comfort? Tap, ride, and arrive—hassle-free!</p>
              
              {/* <input type="button" value="Offer a Ride" /> */}
<div className='button'>
  <Link to='/ChooseAction'><button>Offer a Ride</button></Link> 
</div>
            
<div className='button'>
  <Link to='/ridebook'><button>Book Your Ride</button></Link> 
</div>

              
            </section>
            <section className="middle_right">
              <img src="/images/cute.jpg" alt="Cute Ride" />
            </section>
          </section>

  
          <section className="middle">
            <section className="middle_left">
              <h2>Know Us Better</h2>
              <p>In 2017, Rapido started as a Bike-Taxi service in India and now holds a 70% market share. We are expanding in auto services, cab markets, and intra-city delivery with Rapido Parcel.</p>
            </section>
            <section className="middle_right">
              <img src="/images/know us about.jpg" alt="Rapido Riders" width={300} height={300} />
            </section>
          </section>

     
          <section className="middle">
            <section className="middle_left">
              <h2>Ride with friends seamlessly</h2>
              <p>Set up a group ride in the Raidify app, invite your friends, and arrive together.</p>
            </section>
            <section className="middle_right">
              <img src="/images/ride with friend.jpg" alt="Group Ride" width={300} height={300} />
            </section>
          </section>

          {/* Video */}
          <div className="video-container">
            <video controls width="100%">
              <source src="/videos/map.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Services Toggle */}
          <h1>What's in it for you</h1>
          <div className="toggle">
            <button id="customers" className="active">Customers</button>
            <button id="captains">Captains</button>
          </div>

          {/* Service Info */}
          <div className="text-container">
            <div className="service">
              <img src="/images/bike.png" alt="Bike" height={180} width={180} />
              <h2>India’s largest Bike-Taxi</h2>
              <p>Cut through traffic, reach on time and save money. With Rapido Bike-Taxis, it’s that simple.</p>
            </div>
            <div className="service">
              <img src="/images/auto.png" alt="Auto" height={180} width={180} />
              <h2>5-minute Auto</h2>
              <p>Never wait for an auto ride again! Get a Rapido Auto within just 5 minutes! Anytime. Anywhere.</p>
            </div>
            <div className="service">
              <img src="/images/car.png" alt="Car" height={180} width={180} />
              <h2>Lowest Priced Cabs</h2>
              <p>More wheels. More comfort. And lower price than any other cab out there.</p>
            </div>
          </div>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-section about">
                <h3>Raidify</h3>
                <p>Your go-to app for easy and affordable rides. Safe. Fast. Reliable.</p>
              </div>
              <div className="footer-section links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Book a Ride</a></li>
                  <li><a href="#">Offer a Ride</a></li>
                  <li><a href="#">Profile</a></li>
                </ul>
              </div>
              <div className="footer-section contact">
                <h4>Contact Us</h4>
                <p>Email: support@raidify.com</p>
                <p>Phone: +91-9876543210</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Raidify. All rights reserved.</p>
            </div>
          </footer>

        </section>
      </section>
    </>
  );
};

export default Ride;

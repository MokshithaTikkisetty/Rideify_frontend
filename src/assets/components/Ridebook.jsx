



// import '../styles/Ridebook.css';

// import { useNavigate } from 'react-router-dom';



// const Ridebook = () => {
//   const [when, setWhen] = useState('Now');
//   const [to, setTo] = useState('');
//   const [from, setFrom] = useState('');
  
//   const navigate = useNavigate();
//   return (
//     <div className="ridebook-container">
//       {/* Left panel */}
//       <div className="left-panel">
//         <div className="header">
//           <h2>RAIDIFY</h2>
          
//         </div>

//         <div className="ride-types">
//           <a href="#" className="active">DAILY RIDES</a>
//           <a href="#">OUTSTATION</a>
//           <a href="#">RENTALS</a>
//         </div>

//         <div className="input-fields">
//           <label>FROM</label>
//           <input
//             type="text"
//             placeholder="Enter pickup location"
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//           />

//           <label>TO</label>
//           <input
//             type="text"
//             placeholder="Search for a locality or landmark"
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//           />

//           <label>WHEN</label>
//           <select value={when} onChange={(e) => setWhen(e.target.value)}>
//             <option value="Now">Now</option>
//             <option value="Schedule">Schedule</option>
//           </select>

//           {when === 'Schedule' && (
//             <>
//               <input type="time" />
//               <input type="date" />
//             </>
//           )}

//           <div className="location-info">
//             <p>For an accurate pickup – please allow location access</p>
//             <ul>
//               <li>1. Turn on your device location</li>
//               <li>2. Give "Raidify" access to your browser's location</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Right panel */}
      
//          <section className="right_part">
//              <iframe
//              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.101785740074!2d80.7079268148765!3d16.462487799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb86e76a4c8b%3A0x4c054acbdd5138ef!2sPenamaluru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1619452184572!5m2!1sen!2sin"
//             width="760"
//             height="700"
//              style={{ border: 0 }}
//              allowFullScreen=""
//              loading="lazy"
//              referrerPolicy="no-referrer-when-downgrade"
//              ></iframe>
// <div>
//              <button className="next-button" onClick={() => navigate('/prepayment')}>Next</button>
//              </div>
//          </section>
//     </div>
//   );
// };

// export default Ridebook;




// import '../styles/Ridebook.css';

// const Ridebook = () => {
  
  
//   return (
//     <div className="ridebook-container">
     
//       <div className="left-panel">
        
//       </div>

   
//       <section className="right_part">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.101785740074!2d80.7079268148765!3d16.462487799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb86e76a4c8b%3A0x4c054acbdd5138ef!2sPenamaluru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1619452184572!5m2!1sen!2sin"
//           width="760"
//           height="700"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//         <div>
//           <button className="next-button">Next</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Ridebook;
















import { Link } from 'react-router-dom';
import '../styles/Ridebook.css';
import { useState } from 'react';

const Ridebook = () => {
  const [when, setWhen] = useState('Now');
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');

  return (
    <>
      <div className="book">
        <section className="left_part">
          <section className="header">
            <h1>RAIDIFY</h1>
            
          </section>

          <section className="types">
            <a href="DAILY RIDES">DAILY RIDES</a>
            <a href="OUTSTATION">OUTSTATION</a>
            <a href="RENTALS">RENTALS</a>
          </section>

          <section className="locs">
            <label>FROM</label>
            <input
              type="text"
              placeholder="Enter pickup location"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            /><br /><br />

            <label>TO</label>
            <input
              type="text"
              placeholder="Search for a locality or landmark"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            /><br /><br />

            <label>WHEN</label>
            <select value={when} onChange={(e) => setWhen(e.target.value)}>
              <option value="Now">Now</option>
              <option value="Schedule">Schedule</option>
            </select><br /><br />

            {when === 'Schedule' && (
              <>
                <input type="time" /><br /><br />
                <input type="date" /><br />
              </>
            )}
          </section>
        
            <div className='button'>
  <Link to='/rideprepayement'><button>Next</button></Link> 
</div>
          
        </section>

        <section className="right_part">
          {/* <img src="/images/Indian Auto.jpg" alt="No image" /> */}
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15305.030488995904!2d80.7079267508591!3d16.462487848404724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb86e76a4c8b%3A0x4c054acbdd5138ef!2sPenamaluru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1744188415147!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.101785740074!2d80.7079268148765!3d16.462487799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb86e76a4c8b%3A0x4c054acbdd5138ef!2sPenamaluru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1619452184572!5m2!1sen!2sin"
            width="770"
            height="740"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
      </div>
    </>
  );
};

export default Ridebook;
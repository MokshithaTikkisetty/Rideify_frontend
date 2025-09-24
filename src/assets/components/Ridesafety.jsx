import '../styles/Ridesafety.css';

const Ridesafety = () => {
  return (
    <div className='parent'>
      <section className="mission-banner">
        <div className="bg-img" >
         <img src="/images/safetyimage.webp" alt="road" />
         </div>
         <div className="mission-content">
           <h1>
             "Safety isn't expensive, it's priceless. Invest in safety today for a better tomorrow."
           </h1>
        </div>
    </section>

    <div className="commitment-section">

      <div className="commitment-text">
                <h2>Our commitment to safety</h2>
             <p>
             We want you to move freely, make the most of your time, and be connected to the people and places that matter most to you. That’s why we are committed to safety, from the creation of new standards to the development of technology with the aim of reducing incidents.
         </p>
       </div>
       <div className="commitment-image">
         <img src="/images/commitment-image.jpeg" alt="Commitment to safety" />
                </div>

         
        </div>


        <div className="covers-everyone-section">
          <h2 className="covers-title">Covers Everyone</h2>
          <div className="covers-container">
           
            <div className="cover-card">
              <img src="/images/customer.jpeg" alt="Customer" className="cover-image" />
              <h2>For Customers</h2>
              <p>
                Every ride is tracked by Rapido, with access to granular latitudinal and longitudinal data.
              </p>
            </div>

        
            <div className="cover-card">
              <img src="/images/captain.jpeg" alt="Captain" className="cover-image" />
              <h2>For Captains</h2>
              <p>
                From hiring to training to monitoring to ongoing checks, we take all necessary steps 
                to ensure our Captains' safety.
              </p>
            </div>
          </div>

          <div className="quote-card">
      <div className="quote-text">
        <h1>
        "Every day, our technology puts millions of people together in cars in cities around the world. Helping keep people safe is a huge responsibility and one we do not take lightly."
        </h1>
      </div>
      <div className="quote-author">
        Dara Khosrowshahi, Uber CEO
      </div>
    </div>
        </div>
      
    </div>
  );
};

export default Ridesafety;

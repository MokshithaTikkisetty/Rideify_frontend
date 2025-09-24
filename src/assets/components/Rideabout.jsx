import '../styles/Rideabout.css';

const Rideabout = () => {
  return (
    <>
      <div className='parent'>

<div className="mission-banner">
  <img src="/images/road.webp" alt="Mission Background" className="bg-img" />
  <div className="mission-overlay">
    <h1>
      Our Mission is to remove 1 Million<br />
      Cars from the Roads, every day
    </h1>
    <button className="mission-btn">Share a Ride Today →</button>
  </div>
</div>



    
      <div className="story-section">
        <h2>Our Story</h2>
        <p className="subtitle">Started in 2025, bootstrapped by KNM Rao</p>
        <p className="description">
        We are 2nd-year B.Tech students who face daily parking issues on campus.
Many students travel the same route but hesitate to offer or ask for rides.
Inspired by KNM Rao’s 2025 story of office parking and ride coordination,
we realized the need for a smart, automated carpooling system.
Our goal is to make ride-sharing easy, safe, and efficient.
This project is our step toward solving real-world transport problems.


        </p>
      </div>

      {/* What We Do */}
      <div className="what-we-do">
        <h2>What We Do</h2>
        <p className="subtitle">Aims to provide a quick, simple, secure, and cashless way to travel</p>
        <img src="/images/team.jpeg" alt="team" className="team-img" />
        <p className="description">
          The team at Quick Ride is an energetic, young, and socially conscious group that is working hand in hand with you to solve the problems of traffic congestion, increased transit times and reducing air pollution.
        </p>
      </div>
      <div className="safety-section">
      {/* Left Text Content */}
      <div className="safety-text">
        <h2>Your safety drives us</h2>
        <p>
          Whether you’re in the back seat or behind the wheel, your safety is essential. 
          We are committed to doing our part, and technology is at the heart of our approach. 
          We partner with safety advocates and develop new technologies and systems to help improve 
          safety and help make it easier for everyone to get around.
        </p>
      </div>
      <div className="safety-image">
        <img src="/images/safety.png" alt="safety shield" />
      </div>
    </div>
      </div>
    </>
  );
};

export default Rideabout;


import '../styles/RideProfile.css';

const Rideprofile = () => {
  return (
    <div className="parent"> 

      
      <div className='header'>
        <div className="header_image"> 
          <img src="/images/logo.png" alt="Voxora Logo" height="70px" width="250px" />
        </div>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search Voxora" />
          <button className="search-icon"><i className="fa fa-search"></i></button>
        </div>
        <section className="header_menu">
          <a href="/login">Login</a>
        </section>
      </div>


      <div className="body">
        <div className="profile-sidebar">
          <div className="profile-header">
            <img className="profile-pic" src="/images/pp1.png" alt="Profile" />
            <h2 className="username">u/Spandana</h2>
            <p className="online-status">
              <span className="dot"></span> Online Status: On
            </p>
            <button className="create-avatar">Create Avatar</button>
          </div>

          <div className="profile-stats">
            <div className="stat">
              <strong>1</strong>
              <span>Karma</span>
            </div>
            <div className="stat">
              <strong>3</strong>
              <span>Achievements</span>
            </div>
            <div className="stat">
              <strong>3y 8m</strong>
              <span>Voxora Age</span>
            </div>
          </div>

          <div className="profile-menu">
            <a href="#">👤 Profile</a>
            <a href="#">➕ Create a community</a>
            <a href="#">💰 Contributor Program</a>
            <a href="#">🔒 Vault</a>
            <a href="#">⭐ Voxora Premium</a>
            <a href="#">🔖 Saved</a>
            <a href="#">🕘 History</a>
            <a href="#">⚙ Settings</a>
          </div>
        </div>
      </div>
 <div className='rightmenu'>
        <h1>Suggested for you</h1>
        <div className="profile-list">
          {[
            { name: 'Vaibhav', role: 'Fashion Designer', img: '/images/pp1.png' },
            { name: 'Angelin Daisy', role: 'Web Designer', img: '/images/pp2.png' },
            { name: 'Somesh', role: 'Interior Designer', img: '/images/pp3.png' },
            { name: 'Yasaswini', role: 'Graphic Designer', img: '/images/pp4.png' },
            { name: 'Pallavi', role: 'Fashion Designer', img: '/images/pp5.png' },
          ].map((friend, index) => (
            <div className="profile" key={index}>
              <img src={friend.img} alt={friend.name} />
              <div className="info">
                <h4>{friend.name}</h4>
                <p>{friend.role}</p>
              </div>
              <i className="fas fa-ellipsis-v"></i>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div className='footer'>
        <p>© All Rights Reserved 2025</p>
      </div>
    </div>
  );
};

export default Rideprofile;
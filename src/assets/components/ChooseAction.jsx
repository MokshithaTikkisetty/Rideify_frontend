
import { Link} from 'react-router-dom';
import '../styles/ChooseAction.css';


const ChooseAction = () => {


  return (
    <div className="choose-action-page">
      <div className="action-container">
        <h2>Select an action:</h2>

        <div className="button-group">
          {/* <button className="action-button" >
            I want to offer a ride
          </button> */}


<div className='action-button'>
  <Link to='/rideform'> I want to offer a ride</Link> 
</div>

          {/* <button className="action-button" >
            I want to accept a ride
          </button> */}


<div className='action-button'>
  <Link to='/usercomponent'> I want to accept a ride</Link> 
</div>

        </div>
      </div>
    </div>
  );
};

export default ChooseAction;
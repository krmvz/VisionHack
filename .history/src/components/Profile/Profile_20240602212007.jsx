import React from 'react';
import "./Profile.scss";
import back from '../../images/back.png';
import user from '../../images/user.png';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className='profile_page'>
      <div className="sidebar">
        <h2>USER</h2>
        <ul>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/teams">Teams Market</Link></li>
          {/* <li><Link to="/market">Market</Link></li> */}
        </ul>
      </div>
      <div className='profile'>
        <div className="btn_back"><a href=""><img src={back} alt="" /></a></div>
        <div className="user"><img src={user} alt="" /></div>
        <div className="user_info">
          <div className="name">Name Surname</div>
          <div className="status">Coach</div>
          <div className="faculty">Computer Science</div>
          <div className="uid">UID: 712548698</div>
          <button className='edit'>EDIT</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

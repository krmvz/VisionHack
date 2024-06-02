import React from 'react'
import "./Profile.scss";
import back from '../../images/back.png'



const Profile = () => {
  return (
    <div className='profile container'>
      <div className="btn_back"><a href=""><img src={back} alt="" /></a></div>
      <div className="user"></div>
      <div className="user_info"></div>
    </div>
  )
}

export default Profile;

import React from 'react'
import "./Profile.scss";
import back from '../../images/back.png'
import user from '../../images/user.png'



const Profile = () => {
  return (
    <div className='profile'>
      <div className="btn_back"><a href=""><img src={back} alt="" /></a></div>
      <div className="user"><img src={user} alt="" /></div>
      <div className="user_info">
        <div className="name"></div>
        .sta
      </div>
    </div>
  )
}

export default Profile;

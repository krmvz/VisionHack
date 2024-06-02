import React from 'react';
import './LoginPage.scss';
import LoginPage from './.history/src/pages/LoginPage/LoginPage_20240602062536';

const LoginPage = () => {
  return (
  <div>
    <div>
    <div className="sidebar">
        <h2>User</h2>
        <ul>
            <li>Profile</li>
            <li>Teams</li>
            <li>Market</li>
        </ul>
    </div>
    <div className="login_form">
        {/* Uncomment the image tag if needed */}
        {/* <img src="user.png" alt="User Icon" /> */}
        <h2>Login</h2>
        <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="Username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</div>

</div>

  )
}

export default LoginPage;

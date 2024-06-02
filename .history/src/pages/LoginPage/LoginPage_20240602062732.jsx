import React from 'react'

const LoginPage = () => {
  return (
    <div>
        <div className="sidebar">
        <h2>User</h2>
        <ul>
            <li>Profile</li>
            <li>Teams</li>
            <li>Market</li>
        </ul>
    </div>
    <div className="login-form">
        <form>
            <img src="user.png" alt="User Icon">
            <h2>Login</h2>
            <label>Username</label>
            <input type="text" placeholder="Username">
            <label>Password</label>
            <input type="password" placeholder="Password">
            <button>Login</button>
        </form>
    </div>
    </div>
  )
}

export default LoginPage;

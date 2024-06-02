import React from 'react';
import './Login.scss';  // Import the CSS file for styling

function Login() {
    return (
        <div className="login-container">
            <div className="login-form">
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
    );
}

export default Login;

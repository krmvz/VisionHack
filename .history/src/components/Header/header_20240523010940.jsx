import React from 'react';

import './header.scss';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <header className='header container'>
      <div className="logo"><img src={logo} alt="logo Vision Hack" /></div>
      <div className="navbar">
        <a href="">Problems</a>
        <a href="">IDENTITY</a>
        <a href="">Schedule</a>
        <a href="">Forms</a>
      </div>
      <div className="logs">
        <button>LOG IN</button>
        <button>SIGN IN</button>
      </div>
    </header>
  )
}

export default Header;

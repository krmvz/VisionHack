import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './header.scss';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <header className='header container'>
      <div className="logo"><img src={logo} alt="logo Vision Hack" /></div>
      <div className="navbar"></div>
      <div className="logs"></div>
    </header>
  )
}

export default Header;

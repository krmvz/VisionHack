import React from 'react';

import './header.scss';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <header className='header container'>
      <div className="logo"><img src={logo} alt="logo Vision Hack" /></div>
      <div className="navbar"><a href="">
        </a></div>
      <div className="logs"></div>
    </header>
  )
}

export default Header;

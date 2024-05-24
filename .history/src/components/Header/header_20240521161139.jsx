import React from 'react';
import './header.scss';
import logo from '../../images/logo.png'

const Header = () => {
  return (
    <header className='header'>
      <div className="logo"><img src={logo} alt="" /></div>
      <div className="navbar"></div>
      <div className="logs"></div>
    </header>
  )
}

export default Header;

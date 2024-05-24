import React from 'react'
import logo from '../../images/'
import './footer.scss';



const Footer = () => {
  return (
    <footer className='header container'>
      <div className="logo"><img src={logo} alt="logo Vision Hack" /></div>
      <div className="navbar">
        <a href="">Problems</a>
        <a href="">IDENTITY</a>
        <a href="">Schedule</a>
        <a href="">Forms</a>
      </div>
      <div className="copyright">
        <button>LOG IN</button>
        <button>SIGN IN</button>
      </div>
    </footer>
  )
}

export default Footer;

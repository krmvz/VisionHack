import React from 'react'
import logo from '../../images/logo.png'
import './footer.scss';



const Footer = () => {
  return (
    <footer className='footer'>
      <div className="logo"><img src={logo} alt="logo Vision Hack" /></div>
      <div className="navbar">
        <a href="">PROBLEMS</a>
        <a href="">IDENTITY</a>
        <a href="">SCHEDULE</a>
        <a href="">FORMS</a>
      </div>
      <div className="copyright">
      © VISIONHACK
      </div>
    </footer>
  )
}

export default Footer;

import React from 'react'
import './Footer.css'
import Github from '../assets/images/github.png'
import Instagram from '../assets/images/instagram.png'
import Linkedin from '../assets/images/linkedin.png'
import Logo from '../assets/images/logo.png'
const Footer = () => {
  return (
    <div className='Footer-container' style={{backgroundColor:'#3c3f45'}}>
      <hr /><div className="footer">
        <div className="social-links">

        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={Linkedin} alt="" />
      </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
        </div>
    <div className="blur blur-footer-1"></div>
    <div className="blur blur-footer-2"></div>
    </div>
  )
}

export default Footer

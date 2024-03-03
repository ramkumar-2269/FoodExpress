import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../Assests/logo.png';
import logoFont from '../Assests/Logo-font.png';
import '../Styling/Header.css'

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo" data-aos="fade-right">
          <img src={logo} alt="Logo" />
          <span>FoodExpress</span>
        </div>
        <img src={logoFont} style={{height:70,paddingLeft:20}} alt='LogoFont'/>
        <ul className="nav-links" data-aos="fade-left">
          <li><a href="#login">Login</a></li>
          <li><a href="#register">Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../Assests/logo.png';
import logoFont from '../Assests/Logo-font.png';
import '../Styling/Header.css'
import Modal from 'react-modal'
import { useState } from 'react';
import Login from './Login'
import './Login'
import './Register'
import Register from './Register';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const [visible1,setvisible1]=useState(false)

  

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo" data-aos="fade-right">
          <img src={logo} alt="Logo" />
          <span>FoodExpress</span>
        </div>
        <img src={logoFont} style={{height:70,paddingLeft:20}} alt='LogoFont'/>
        <ul className="nav-links" data-aos="fade-left">
          <li>

          
            



          <Link to="./Login">Login</Link>
            
        


          </li>
          <li>
<Link to= "./Register"> Register</Link>
          
          
          
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

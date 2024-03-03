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

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);


  const [visible,setvisible]=useState(false)

  

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

          <div>
            <div>

            
                <button ClassName="btn btn-open" onClick={() => setvisible(true)} type ="button" style={{backgroundColor:'white',padding:0,border:0,fontStyle:'consolas',fontSize:15}}>Login </button>
                <Modal class="modal" isOpen={visible}   onRequestClose={() => setvisible(false)}   style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    content: {
                        position: 'absolute',
                        top: '80px',
                        left: '350px',
                        right: '350px',
                        bottom: '80px',
                        border: '1px solid #ccc',
                        background: 'white',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '20px',
                        alignitems: 'center',
                        textAlign:'center',
                    }
                }}>
                
                   <Login onClose={()=>setvisible(false)}/>
                    <button onClick={() => setvisible(false)}> Close</button>
                </Modal>
            </div>
        </div>


          </li>
          <li><a href="#register">Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

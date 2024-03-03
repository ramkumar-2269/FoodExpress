import React, { useEffect } from 'react'
import Header from './Header'
import '../Styling/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import delivery from '../Assests/delivery.jpg'

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true
    });
  }, []);
  return (
   <div>
    <Header />
    <div className="landing-page">
      <div className="content">
        <div className='text'>
          <h1 data-aos="fade-right">Delicious Food Delivered to Your Doorstep</h1>
            <h2 data-aos="fade-left">Fast. Fresh. Convenient.</h2>
           <p data-aos="fade-right">Order from a variety of restaurants with just a few clicks!</p>
        </div>
      <div className='image'>
        <img src={delivery} alt='delivery'/>
      </div>
      </div>
    </div>
   </div>
  )
}

export default Home
import React from 'react';
import '../Styles/Header.css'
import logo from '../assets/Images/HerHealthMatters.png'
const Header = () => {
  return (
    <div className='head'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='items'>
            <p>Home</p>
            <p>About</p>
            <p>Blog</p>
            <p>Our services</p>
                
            
        </div>
        <div className='login'>C</div>
    </div>
  )
}

export default Header
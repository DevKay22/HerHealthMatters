import React from 'react';
import '../Styles/Header.css'
import logo from '../assets/Images/HerHealthMatters.png';
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <div className='content'>
        <div className='head'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='items'>
            <p className='home'>Home</p>
            <p className='grey navhover'>About</p>
            <p className='grey navhover'>Blog</p>
            <p className='grey navhover'>Our services</p>
                
            
        </div>
        <div className='login'>
            <button type='button'>Sign in</button>
        </div>

        {/* mobile */}

        
        <div className='hamburger'>
           <GiHamburgerMenu  className='ham'/>
        </div>
        

        
        <div className='mobileItems'>
            <p className='home'>Home</p>
            <p className='grey'>About</p>
            <p className='grey'>Blog</p>
            <p className='grey'>Our services</p>
        </div>
        
        
        
       
    </div>

    </div>
  )
}

export default Header
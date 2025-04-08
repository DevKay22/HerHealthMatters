import React from 'react';
import '../Styles/Hero.css'
import herhealth from '../assets/Images/Sonography-bro 1.png';
import women from '../assets/Images/women.png'
const Hero = () => {
  return (
    <div className='herobanner'>
        <div className='carousel'>
            <div className='cont'>
                <h1>
                    Online Health Care for Women
                </h1>

                <p>
                    From pregnancy to birth, HerHealthMatters  is here to care for you.

                </p>

                <button>Let's begin the journey!</button>
            </div>
            <div className='imagery'>
                <img src={herhealth} alt="" />
            </div>

            <div className='mobileBtn'>
            <button>Let's begin the journey!</button>
            </div>
        </div>

 
        <div className='womencont'>
            <div>
                <p>
                Join our community of women
                </p>
            </div>
            
            <div>
                <img src={women} alt="" />
            </div>
            
        </div>
    </div>
  )
}

export default Hero

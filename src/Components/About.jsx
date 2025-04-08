import React from 'react';
import '../Styles/About.css';
import preg from '../assets/Images/preg.png';

const About = () => {
  return (
    <div className='abt'>
        <div className='abtContent'>
            <h1>About Us</h1>

            <p>
                We are a fast growing and leading initiative in 
                in Africa's largest economy, Nigeria.
                
            </p>

            <p>
            The WHO research indicated that pregnant women's psychological 
                health state was not good and has tendency of declining by 67% per year.
                
            </p>

            <p>
                The major problem is what birth the HerHealthMatters initiative. Our vision 
                is to be a dedicated advocate for women's health, offering 
                comprehensive care, promoting preventive health measures, and ensuring that every woman receives 
                respectful, high-quality healthcare throughout her life.
            </p>
        </div>

        <div className='diagram'>
            <div className='preg'>
                <img src={preg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About
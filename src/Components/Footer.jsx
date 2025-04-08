import React from 'react';
import '../Styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContent'>
                <h1> Newsletter</h1>
                <p>
                    Get the latest news about our services and products.
                </p>

                <div>
                    <input type="email" name="" id="" placeholder='Enter email'/>
                    <button>Subscribe</button>
                </div>

                <p>
                    Service Hours: Mondays - Saturdays (9am -8pm)
                </p>
                <p>
                    Email: herhealthmatters@gmail.com
                </p>
                <p>
                    Phone No: 093478992
                </p>
                
                
        </div>

        <div className='footerList'>
                    <div>
                        <h1>About us</h1>
                        <p>With us</p>
                        <p>Where to find us</p>
                        <p>FAQs</p> 
                    </div>
                    <div>
                        <h1>Terms</h1>
                        <p>Warranty</p>
                        <p>Refund</p>
                        <p>Policies</p>
                        <p>Privacy</p>
                    </div>
                    <div>
                        <h1>Get help</h1>
                        <p>Contact us</p>
                        <p>Track order</p>
                        <p>Talk to a representative</p> 
                    </div>
        </div>

        <div className='foot'>
            <h3>HerHealthMatters</h3>
            <small>Copyright 2025</small>
        </div>
    </div>
  )
}

export default Footer
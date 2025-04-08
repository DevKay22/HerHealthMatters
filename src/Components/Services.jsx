import React from 'react';
import '../Styles/Services.css';
import icon1 from '../assets/Images/icon1.png';
import icon2 from '../assets/Images/icon2.png';
import icon3 from '../assets/Images/icon3.png';

const Services = () => {
  return (
    <div className='services'>
        <div className='svc'>
            <h1>
                Our Services
            </h1>

            <div className='svcContent'>
                <div>
                  <div className='svcMobile'>
                    <img src={icon1} alt="" className='icons' />

                    <h3>
                      Maternity Tips and Guides
                    </h3>
                  </div>
                  

                  <p>
                    Whether you are planning to become pregnant, already pregnant or about to 
                    become a parent, there are various tips and guides to help you navigate 
                    this journey.
                  </p>
                </div>


                <div>

                  <div className='svcMobile'>
                    <img src={icon2} alt="" className='icons' />

                    <h3>
                      Free Consultation
                    </h3>

                  </div>

                <p>
                    Meet our professionals for free. Discuss your needs, ask questions and get answers, 
                    discuss options, establish a relationship and potentially schedule follow-up appointments.
                </p>
                </div>



                <div>

                      <div className='svcMobile'>
                        <img src={icon3} alt="" className='icons' />

                        <h3>
                           Pharmaceuticals
                        </h3>
                      </div>
                

              <p>
                 We have a broad category of drugs and medicataions designed for various medical purposes.
              </p>
            </div>


            </div>

            <div className='btn'>
            <button>Read More</button>
            </div>
        </div>

        
    </div>
  )
}

export default Services
import React from 'react';
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <div className='listening'>
        <h1>
            We are Listening
        </h1>

        <form action="#">
            <div  className='inps'>
                <input type="text" className='fname' name="fname" id="name" placeholder='First Name'/>

                <input type="email" className='email' name="email" id="email"  placeholder='Email Address'/>
            </div>

            <div className='textArea'> 
                <textarea name="" id="" placeholder='Type in your message'>
                    

                    
                </textarea>

                <button>Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default Contact
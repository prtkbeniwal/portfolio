import React, { useRef } from 'react'
import './Newsletter.css'
import emailjs from '@emailjs/browser'

function Newsletter() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n3ra3aa', 'template_bvqwx29', form.current, '96CMRFU70PPWLwImg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='newsletter'>
        <div className='newsletter-heading'>
            <h3>
              Subscribe to my Newsletter
              & Never miss latest updates
            </h3>
        </div>
        <div className='newsletter-subscription'>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form-content'>
              <input type='email' name='user_email' placeholder='Enter your email here' />
              <button>Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Newsletter
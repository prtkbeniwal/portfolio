import React, { useRef } from 'react'
import './GetInTouch.css'
import contactimg from '../assets/contactimg.svg'
import emailjs from '@emailjs/browser';


function GetInTouch() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n3ra3aa', 'template_exz5prz', form.current, '96CMRFU70PPWLwImg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className='getintouch'>
        <div className='git-container max-width'>
          <div className='git-left'>
              <img src={contactimg} alt='' />
          </div>
          <div className='git-right'>
            <div className='git-heading'>Get In Touch</div>
            <form className='git-form' ref={form} onSubmit={sendEmail}>
              <div>
                <input type='name' name='user_fname' placeholder='First Name'/>
                <input type='name' name='user_lname' placeholder='Last Name'/>
              </div>
              <div>
                <input type='email' name='user_email' placeholder='Email'/>
                <input type='number' name='user_phone' placeholder='Phone No.'/>
              </div>
              <div>
                <textarea rows='6' name='user_message' placeholder='Message'/>
              </div>
              <button type="submit" value="Send">Send</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default GetInTouch
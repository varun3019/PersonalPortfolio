import React, { useRef } from 'react'
import "./contact.css"
import fb from "../../assets/facebook-icon.png"
import ins from "../../assets/instagram.png"
import tw from "../../assets/twitter.png"
import emailjs from '@emailjs/browser';
const Contact = () => {
    
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_l22wthd', 'template_il06rae', form.current, 'xEUtEDfSZkYmudCVm')
          .then((result) => {
              e.target.reset()
              alert("email sent")
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div id = "contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the bellow form to Contact Me</span>
            <form ref={form} onSubmit={sendEmail} className='contactForm' >
                <input type="text" className="name" placeholder='Your Name' name= "from_name" />
                <input type="email" className="email" placeholder='Your Email'  name= "from_email" />
                <textarea name="message"   rows="5" placeholder='Your Message' className='msg'></textarea>
                <button className="submitbtn" type='submit' value="send">Submit</button>
                <div className="links">
                    <img src={fb} alt="facebook" className='link'/>
                    <img src={tw} alt="twitter"  className='link'/>
                    <img src={ins} alt="instagram"  className='link'/>
                </div>
            </form>
        </div>
    )
}

export default Contact
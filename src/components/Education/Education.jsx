import React, { useRef } from 'react';
import './education.css';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import emailjs from '@emailjs/browser';
import Clipboard from 'react-clipboard.js';
import { FaCopy } from "react-icons/fa";




const Educations = () => {
  //   event.preventDefault(); // Prevent the default behavior of the anchor link
  //   navigator.clipboard.writeText(phoneNumber)
  //     .then(() => {
  //       console.log('Phone number copied to clipboard');
  //     })
  //     .catch((error) => {
  //       console.error('Unable to copy phone number to clipboard', error);
  //     });
  // };
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kpzxgqz', 'template_kk9ipl8', form.current, 'uKELRhBOpArKOozDJ')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
      });

    e.target.reset();
  };

  return (
    <section id='educations'>
      <h2>EDUCATION</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
          <img src="https://www.atc.ac.th/wp-content/uploads/2019/03/cropped-logo_atc.png" alt="ATC Logo" className="contact__option-image" /> 
          <br></br> 
            <h3><b>Attawit Commercial Technology College</b></h3>
            <h3>(ATC)</h3>
            <br></br> 
            <h4>Information Technology </h4>
            <h5>2017 - 2022</h5>
          </article>
        </div>
        <div className='contact__options'>
          <article className='contact__option'>
          <img src="https://www.jgsee.kmutt.ac.th/v3/wp-content/uploads/2019/10/logo2.png" alt="ATC Logo" className="contact__option-image" /> 
            <br></br> 
            <h3><b>King Mongkut's University of Technology North Bangkok (KMUTNB)</b></h3>
            <br></br> 
            <h4>Electronics and Computer Technology</h4>
            <h5>2022 - Now</h5>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Educations;

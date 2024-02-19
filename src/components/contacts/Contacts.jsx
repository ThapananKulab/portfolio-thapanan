import React, { useRef } from 'react';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';
import emailjs from '@emailjs/browser';


const Contacts = () => {
  // const handleCopyClick = (phoneNumber, event) => {
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
    <section id='contacts'>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>thapanan.kularb@gmail.com</h5>
            <a href='mailto:thapanan.kularb@gmail.com' onClick={sendEmail}>
              Send a message
            </a>
          </article>
        </div>
        <div className='contact__options'>
          <article className='contact__option'>
            <IoCall className='contact__option-icon' />
            <h4>My Phone</h4>
            <h5>081-913-9936</h5>
            {/* <a href="#" onClick={(e) => handleCopyClick('081-913-9936', e)}><FaCopy className='copy-icon' /></a> */}
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

import React, { useEffect, useState } from 'react';
import './header.css'
import CTA from './CTA'
import port from '../../assets/port2.png'
import HeaderSocials from './HeaderSocials'

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [hasTyped, setHasTyped] = useState(false);
  const originalText = "I'm Thapanan Kulab";

  useEffect(() => {
    if (!hasTyped) {
      let index = 0;

      function type() {
        setTypedText(originalText.substring(0, index));
        index++;

        if (index <= originalText.length) {
          setTimeout(type, 100);  // Adjust the timeout for typing speed
        } else {
          setHasTyped(true);
        }
      }

      type();
    }
  }, [hasTyped, originalText]);

  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello</h5>
        <h1>{typedText}</h1>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={port} alt='me' />
        </div>
      </div>
    </header>
  );
};

export default Home;
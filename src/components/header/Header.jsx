import React from 'react'
import './header.css'
import CTA from './CTA'
import port from '../../assets/port2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Hello, I'm</h5>
          <h1>Thapanan Kulab</h1>          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={port} alt='me'/>
          </div>

        </div>
      </header>

    
    
  )
}

export default Header
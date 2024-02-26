import React from 'react'
import './footer.css'
import { FaInstagram } from "react-icons/fa";
import {BsGithub} from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>THAPANAN KULAB</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#educations">Educations</a></li>
            <li><a href="#experience">My Skills</a></li>
            <li><a href="#myprojects">My Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.instagram.com/h2ohight/"><FaInstagram /></a>
          <a href="https://github.com/ThapananKulab"><BsGithub/></a>
          <a href="https://web.facebook.com/THA.98NIX/"><FaFacebookF /></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Thpanan Kulab. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
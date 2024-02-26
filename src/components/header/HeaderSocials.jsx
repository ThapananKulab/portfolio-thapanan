import React from 'react'
import { FaInstagram } from "react-icons/fa";
import {BsGithub} from 'react-icons/bs'
import { FaFacebookF } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.instagram.com/h2ohight/" target="_blank" rel='noreferrer'><FaInstagram /></a>
        <a href="https://github.com/ThapananKulab" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://web.facebook.com/THA.98NIX/" target="_blank" rel='noreferrer'><FaFacebookF />
</a>
    </div>
  )
}

export default HeaderSocials
import React from 'react'
import './about.css'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import port4 from '../../assets/port4.png'
import { FcIdea } from "react-icons/fc";


const About = () => {
  return (
    <section id='about'>
      
      <h2>About Me</h2>
      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
                <img src={port4} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Bachelor's degree</h5>
                  <small>Electronics Computer <br /><i>King Mongkut's University of Technology North Bangkok (KMUTNB)</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small></small>
              </article>

              <article className='about__card'>
                  <FcIdea className='about__icon'/>
                  <h5>Interests</h5>
                  <small>
                    <ul>
                      <li>Software Engineer</li>
                      <li>Full Stack Developer</li>
                      <li>Data Engineer</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b> student </b> at King Mongkut's University of Technology, North Bangkok.
                    I'm seeking a challenging internship opportunity to apply
                    and expand my technical skills.
                    With a strong academic foundation in programming skills and hands-on experience in various programming languages,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner and diligent.

                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About
import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/img3.png'
import IMG2 from '../../assets/img2.png'
import IMG4 from '../../assets/img4.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>Sek Loso FC</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ThapananKulab/app-quiz.git" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://blue-grass-060baba10.4.azurestaticapps.net" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>Rent Book</h3>
            <small className='text-light'>HTML | CSS | JS | PHP | MySQL</small>
            <div className="portfolio__item-cta">
              <a href="#" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>Management Raw System</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/ThapananKulab/cafe-project.git" target="_blank" rel='noreferrer' className='btn '>Github</a>
              <a href="https://iridescent-bombolone-9c386c.netlify.app" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
        </article>
      
      </div>
    </section>
  )
}

export default Myprojects
import React from 'react'
import CV from '../../assets/Thakshila-Bandara_CV.pdf'
import Resume from '../../assets/Thapanan_RESUME.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

<a href={CV} download className='btn btn-primary'>Download Transcript</a>
        <a href={Resume} download className='btn'>Donwload CV</a>
    </div>
  )
}

export default CTA
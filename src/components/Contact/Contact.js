import React from 'react'
import './contact.scss'
import Breakpoint from '../Breakpoint/Breakpoint'
import Magnetic from '../Magnetic/Magnetic'

function Contact({scrollYProgress}) {
  return (
    <div className='contact-section'>
      <Breakpoint name={'contact me'} link={'contact'}/>
      <div className='socials-in-touch'>
        <div className='socials-top'>
          <div className='socials'>
            <ul>
              <a href='mailto:jmaduafokwa@hotmail.com'><li>Email</li></a>
              <a href='https://github.com/jmaduafo' target='_blank' rel='noreferrer'><li>Github</li></a>
              <a href='https://www.instagram.com/jazzimanian_devil/' target='_blank' rel='noreferrer'><li>Instagram</li></a>
              <a href='https://www.linkedin.com/in/jasmine-maduafokwa-48070a180/' target='_blank' rel='noreferrer'><li>LinkedIn</li></a>
            </ul>
          </div>
          <div className='in-touch'>
            <h3>Want to work together? Let's get in touch!</h3>
            <Magnetic><p style={{ cursor: 'default'}}>Currently available for hybrid / remote work</p></Magnetic>
          </div>
        </div>
        <div className='socials-bottom'>
          <div className='line-break'></div>
        </div>
      </div>

    </div>
  )
}

export default Contact
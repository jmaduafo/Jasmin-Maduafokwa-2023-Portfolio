import React from 'react'
import './contact.scss'
import Breakpoint from '../Breakpoint/Breakpoint'
import { motion } from 'framer-motion'

function Contact({scrollYProgress}) {
  return (
    <motion.div className='contact-section' initial={{ opacity: 0}} whileInView={{ opacity: 1}} viewport={{ once: true}} transition={{ duration: 1.2, delay: .2}}>
      <Breakpoint name={'contact me'} link={'contact'}/>
      <div className='socials-in-touch'>
        <div className='socials-top'>
          <motion.div className='socials' initial={{ opacity: 0}} whileInView={{ opacity: 1}} viewport={{ once: true}} transition={{ duration: 1.2, delay: .6}}>
            <ul>
              <a href='mailto:jmaduafokwa@hotmail.com'><li>Email</li></a>
              <a href='https://github.com/jmaduafo' target='_blank' rel='noreferrer'><li>Github</li></a>
              <a href='https://www.behance.net/jmaduafo' target='_blank' rel='noreferrer'><li>Behance</li></a>
              <a href='https://www.linkedin.com/in/jasmine-maduafokwa-48070a180/' target='_blank' rel='noreferrer'><li>LinkedIn</li></a>
            </ul>
          </motion.div>
          <div className='in-touch'>
            <div style={{ overflow: 'hidden'}}>   
              <motion.h3 initial={{ y: 120}} whileInView={{ y: 0}} viewport={{ once: true}} transition={{ duration: 1.2, delay: .2}}>Want to work together? Let's get in touch!</motion.h3>
            </div>

            <motion.p initial={{ opacity: 0}} whileInView={{ opacity: 1}} viewport={{ once: true}} transition={{ duration: 1.2, delay: .6}}> <span style={{ color: 'green', paddingRight: '5px'}}>&#9679;</span> Currently available for hybrid / remote work</motion.p>
          </div>
        </div>
        <div className='socials-bottom'>
          <div className='line-break'></div>
        </div>
      </div>

    </motion.div>
  )
}

export default Contact
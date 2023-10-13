import React from 'react'
import './home-intro.scss'
import Magnetic from '../Magnetic/Magnetic'
import { motion, easeIn } from 'framer-motion'


function HomeIntro() {
  return (
    <motion.section>
      <motion.div className='home-intro-section'>
        <div className='home-intro-name-info'>
          <div className='home-intro-name'>
            <motion.h1 initial={{ y: '100%'}} animate={{ y: 0, ease: easeIn, transition: {duration: 1.2, delay: .4}}}>I'm Jasmine,</motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, ease: easeIn, transition: {duration: 1.2, delay: .8}}} className='home-intro-info'>
            <p>a self-taught full stack developer with a deep passion for design and learning. I'm an innovative thinker seeking to use my mathematics background and design sense to create fully-functioning, eye-catching websites and applications created both independently and in team-based workspaces.</p>
          </motion.div>
          <div className='spinning-button'>
            <Magnetic>
            <div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, ease: easeIn, transition: {duration: 1.2, delay: .8}}} className='home-intro-button'>
                <i className='bx bx-down-arrow-alt' ></i>
              </motion.div>
            </div>
            </Magnetic>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, ease: easeIn, transition: {duration: 1.2, delay: .8}}} className='home-intro-main-image'>
            <motion.img initial={{ scale: .9 }} animate={{ scale: 1, ease: easeIn, transition: {duration: 1.2, delay: .8}}} src='https://res.cloudinary.com/dyxxn831a/image/upload/v1697210038/portfolio%20images/simpler-port2_r8pzj7.jpg' alt='wild plant'/>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default HomeIntro
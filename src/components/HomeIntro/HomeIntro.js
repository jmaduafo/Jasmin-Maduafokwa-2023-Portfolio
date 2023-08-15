import React, { useRef } from 'react'
import './home-intro.scss'
import mainImage from '../../assets/images/home-intro-main-image.jpg'
import { motion, useTransform, useScroll } from 'framer-motion'


function HomeIntro() {
  const homeTarget = useRef(null);

  const { scrollYProgress } = useScroll({
    target: homeTarget,
    offset: ["start end", "end start"]
  })

  const up = useTransform(scrollYProgress, [0, 1], [20, -30])
  const opaque = useTransform(scrollYProgress, [.5, 1], [1, .5])

  return (
    <motion.section ref={homeTarget}>
      <motion.div className='home-intro-section' style={{ opacity: opaque, translateY: up}}>
        <div className='home-intro-name-info'>
          <div className='home-intro-name'>
            <motion.h1 initial={{ y: '100%'}} animate={{ y: 0, ease: 'easeIn', transition: {duration: 1.2, delay: .4}}}>I'm Jasmine,</motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, ease: 'easeIn', transition: {duration: 1.2, delay: .8}}} className='home-intro-info'>
            <p>a self-taught full stack developer with a deep passion for design and learning. I'm an innovative thinker seeking to use my mathematics background and design sense to create fully-functioning, eye-catching websites and applications created both independently and in team-based workspaces.</p>
          </motion.div>
          <div className='spinning-button'>
            <div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, ease: 'easeIn', transition: {duration: 1.2, delay: .8}}} className='home-intro-button'>
                <i className='bx bx-down-arrow-alt' ></i>
              </motion.div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, ease: 'easeIn', transition: {duration: 1.2, delay: .8}}} className='home-intro-main-image'>
            <motion.img initial={{ scale: .9 }} animate={{ scale: 1, ease: 'easeIn', transition: {duration: 1.2, delay: .8}}} src={mainImage} alt='wild plant'/>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default HomeIntro
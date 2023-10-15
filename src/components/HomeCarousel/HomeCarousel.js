import React from 'react'
import '../Carousel/carousel.scss'
import './home-carousel.scss'
import  { motion, easeInOut } from 'framer-motion'

function HomeCarousel() {
  return (
    <motion.div initial={{ y: 120 }} animate={{ y: 0, ease: easeInOut, transition: { duration: 1.2, delay: .6}}} className='carousel-container'>
      <div className='carousel'>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
        <span>Web Designer</span>
        <span>&#9679;</span>
        <span>Frontend Developer</span>
        <span>&#9679;</span>
        <span>Backend Developer</span>
        <span>&#9679;</span>
        <span>Creative Developer</span>
        <span>&#9679;</span>
      </div>
    </motion.div>
  )
}

export default HomeCarousel
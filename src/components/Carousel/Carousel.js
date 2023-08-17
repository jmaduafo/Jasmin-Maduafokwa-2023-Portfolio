import React from 'react'
import './carousel.scss'
import { motion, easeInOut } from 'framer-motion'

function Carousel({title}) {
  return (
    <section>
      <motion.div initial={{ y: 120 }} animate={{ y: 0, ease: easeInOut, transition: { duration: 1.2, delay: .6}}} className='carousel-container'>
        <div className='carousel'>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
          <span>{title}</span>
          <span>&#9679;</span>
        </div>
      </motion.div>
    </section>
  )
}

export default Carousel
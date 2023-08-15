import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import './menu.scss'
import { motion } from 'framer-motion'

function Menu({menuOpen, setMenuOpen}) {
   

  return (
    <motion.div initial={{  x: '100%', opacity: 0 }} animate={{ x: menuOpen ? 0 : '100%', ease: 'easeInOut', opacity: menuOpen ? 1 : 0, transition: { duration: .7 }}} className='menu'>
        <div className='menu-cancel' onClick={() => setMenuOpen(false)}>
            <motion.i initial={{  opacity: 0 }} animate={{ opacity: menuOpen ? 1 : 0, ease: 'easeInOut', transition: { duration: .5 }}} className='bx bx-x'></motion.i>
        </div>
        <ul>
            <HashLink to='/#home' onClick={() => setMenuOpen(false)}><li>Home</li></HashLink>
            <HashLink to='/#about' onClick={() => setMenuOpen(false)}><li>About</li></HashLink>
            <HashLink to='/#works' onClick={() => setMenuOpen(false)}><li>Works</li></HashLink>
            <HashLink to='/#contact' onClick={() => setMenuOpen(false)}><li>Contact</li></HashLink>
            <HashLink to='/#contact' onClick={() => setMenuOpen(false)}><li>Resume</li></HashLink>
        </ul>
    </motion.div>
  )
}

export default Menu
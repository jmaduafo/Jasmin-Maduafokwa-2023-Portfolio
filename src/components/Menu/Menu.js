import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import './menu.scss'
import { motion, easeInOut } from 'framer-motion'

function Menu({menuOpen, setMenuOpen}) {
   

  return (
    <motion.div initial={{  x: '100%', opacity: 0 }} animate={{ x: menuOpen ? 0 : '100%', ease: easeInOut, opacity: menuOpen ? 1 : 0, transition: { duration: .7, delay: menuOpen ? 0 : .5 }}} className='menu'>
        <div className='menu-cancel' onClick={() => setMenuOpen(false)}>
            <motion.i initial={{  opacity: 0 }} animate={{ opacity: menuOpen ? 1 : 0, ease: easeInOut, transition: { duration: .5 }}} className='bx bx-x'></motion.i>
        </div>
        <ul>
            <div>
            <HashLink to='/#home' onClick={() => setMenuOpen(false)}><motion.li initial={{ y: 120 }} animate={{ y: menuOpen ? 0 : 120, ease: easeInOut}} transition={{ duration: 1, delay: menuOpen ? .5 : 0 }}>Home</motion.li></HashLink>
            </div>
            <div>
            <HashLink to='/#about' onClick={() => setMenuOpen(false)}><motion.li initial={{ y: 120 }} animate={{ y: menuOpen ? 0 : 120, ease: easeInOut}} transition={{ duration: 1, delay: menuOpen ? .5 : 0 }}>About</motion.li></HashLink>
            </div>
            <div>
            <HashLink to='/#works' onClick={() => setMenuOpen(false)}><motion.li initial={{ y: 120 }} animate={{ y: menuOpen ? 0 : 120, ease: easeInOut}} transition={{ duration: 1, delay: menuOpen ? .5 : 0 }}>Works</motion.li></HashLink>
            </div>
            <div>
            <HashLink to='/#contact' onClick={() => setMenuOpen(false)}><motion.li initial={{ y: 120 }} animate={{ y: menuOpen ? 0 : 120, ease: easeInOut}} transition={{ duration: 1, delay: menuOpen ? .5 : 0 }}>Contact</motion.li></HashLink>
            </div>
            <div>
            <HashLink to='/#contact' onClick={() => setMenuOpen(false)}><motion.li initial={{ y: 120 }} animate={{ y: menuOpen ? 0 : 120, ease: easeInOut}} transition={{ duration: 1, delay: menuOpen ? .5 : 0 }}>Resume</motion.li></HashLink>
            </div>  
        </ul>
    </motion.div>
  )
}

export default Menu
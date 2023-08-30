import React, { useState } from 'react'
import './navbar.scss'
import { HashLink } from 'react-router-hash-link'
import Menu from '../Menu/Menu'
import Magnetic from '../Magnetic/Magnetic'
import resume from '../../utils/jasmine-resume.pdf'
import { motion, easeInOut, easeIn } from 'framer-motion'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    <motion.header initial={{ y: -120 }} animate={{ y: 0 , ease: easeIn, transition: { duration: .8, delay: 5.1 }}}>
      <nav>
        <div className='navbar'>
          <div className='nav-logo'>
            <HashLink to='/#home' smooth><h4>JM</h4></HashLink>
          </div>
          <div className='nav-links'>
              <ul>
                <HashLink to='/#about' smooth><li>about</li></HashLink>
                <HashLink to='/#works' smooth><li>works</li></HashLink>
                <HashLink to='/#contact' smooth><li>contact</li></HashLink>
              </ul>
              <Magnetic>
                <a href={resume} download><button>resume</button></a>
              </Magnetic>
          </div>
          <div className='nav-menu' onClick={() => setMenuOpen(true)}>
            <motion.p initial={{ y: 0 }} animate={{ y: menuOpen ? 40 : 0, ease: easeInOut, transition: { duration: .5 }}}>Menu</motion.p>
          </div>
        </div>
      </nav>
    </motion.header>
    <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen}></Menu>
    </>
  )
}

export default Navbar
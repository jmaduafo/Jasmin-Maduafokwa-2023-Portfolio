import React from 'react'
import './navbar.scss'
import { HashLink } from 'react-router-hash-link'

function Navbar() {
  return (
    <header>
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
              <a href='#hre' download><button>resume</button></a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
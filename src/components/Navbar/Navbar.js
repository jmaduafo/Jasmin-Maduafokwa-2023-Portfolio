import React from 'react'
import './navbar.scss'

function Navbar() {
  return (
    <header>
      <nav>
        <div className='navbar'>
          <div className='nav-logo'>
            <a href='#home'><h4>JM</h4></a>
          </div>
          <div className='nav-links'>
              <ul>
                <a href='#about'><li>about</li></a>
                <a href='#works'><li>works</li></a>
                <a href='#contact'><li>contact</li></a>
              </ul>
              <a href='#hre'><button>resume</button></a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
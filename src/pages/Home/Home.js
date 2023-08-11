import React from 'react'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import HomeIntro from '../../components/HomeIntro/HomeIntro'
import About from '../../components/About/About'
import Works from '../../components/Works/Works'
import Contact from '../../components/Contact/Contact'

function Home() {
  return (
    <div id='home'>
      <HomeIntro/>
      <HomeCarousel/>
      <About/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default Home
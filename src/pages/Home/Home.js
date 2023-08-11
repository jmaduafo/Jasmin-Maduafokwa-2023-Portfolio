import React from 'react'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import HomeIntro from '../../components/HomeIntro/HomeIntro'
import About from '../../components/About/About'
import Works from '../../components/Works/Works'

function Home() {
  return (
    <div id='home'>
      <HomeIntro/>
      <HomeCarousel/>
      <About/>
      <Works/>
    </div>
  )
}

export default Home
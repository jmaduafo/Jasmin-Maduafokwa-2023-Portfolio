import React, { useRef } from 'react'
import HomeCarousel from '../../components/HomeCarousel/HomeCarousel'
import HomeIntro from '../../components/HomeIntro/HomeIntro'
import About from '../../components/About/About'
import Works from '../../components/Works/Works'
import Contact from '../../components/Contact/Contact'


function Home() {
  const homeTarget = useRef(null);

  const { scrollYProgress } = useScroll({
    target: homeTarget,
    offset: ["start end", "end start"]
  })

  return (

    <div id='home' ref={homeTarget}>
      <HomeIntro scrollYProgress={scrollYProgress}/>
      <HomeCarousel/>
      <About scrollYProgress={scrollYProgress}/>
      <Works scrollYProgress={scrollYProgress}/>
      <Contact scrollYProgress={scrollYProgress}/>
    </div>
  )
}

export default Home
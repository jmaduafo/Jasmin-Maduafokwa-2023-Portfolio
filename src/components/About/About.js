import React, { useState, useEffect } from 'react'
import './about.scss'
import BreakPoint from '../Breakpoint/Breakpoint'
import { motion, easeInOut } from 'framer-motion'
import skillsData from '../../utils/skills'

function About({scrollYProgress}) {
  const [musicHover, setMusicHover] = useState(false)
  const [animeHover, setAnimeHover] = useState(false)
  const [netflixHover, setNetflixHover] = useState(false)

  const [skills, setSkills] = useState('frontend')
  const [skillsFilter, setSkillsFilter] = useState()

  useEffect(function() {
    setSkillsFilter(skillsData.filter(skill => {
      return skill.category === skills
    }))
  }, [skills])
  
  return (
    <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1}} transition={{ delay: 3 }} viewport={{ once: true }}>
      <div className='about-section'>
        <BreakPoint name={'about'} link={'about'}/>
        <div className='about-desc'>
          <motion.h3 initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0, ease: easeInOut }} transition={{ duration: 1.2, delay: 2.5}} viewport={{ once: true }}>When I’m not busy coding, I also enjoy listening to <span onMouseEnter={() => setMusicHover(true)} onMouseLeave={() => setMusicHover(false)}>music</span>, watching <span onMouseEnter={() => setAnimeHover(true)} onMouseLeave={() => setAnimeHover(false)}>anime</span>, and searching for the next show or movie on <span onMouseEnter={() => setNetflixHover(true)} onMouseLeave={() => setNetflixHover(false)}>Netflix</span> to binge while lazing on my bed.</motion.h3>
          <div className='about-images'>
            <div>
              <motion.img initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: musicHover ? '20deg' : 0, opacity: musicHover ? 1 : 0 }} src='https://res.cloudinary.com/dyxxn831a/image/upload/v1691764231/portfolio%20images/music-image1_gohfti.jpg' alt='music playing on spotify'/>
            </div>
            <div>
              <motion.img initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: animeHover ? '-20deg' : 0, opacity: animeHover ? 1 : 0}}  src='https://res.cloudinary.com/dyxxn831a/image/upload/v1691764254/portfolio%20images/anime-image_wabc3p.jpg' alt='netflix on laptop resting on cozy mattress'/>
            </div>
            <div>
              <motion.img initial={{ rotate: 0, opacity: 0 }} animate={{ rotate: netflixHover ? '-10deg' : 0, opacity: netflixHover ? 1 : 0}} src='https://res.cloudinary.com/dyxxn831a/image/upload/v1691764239/portfolio%20images/netflix-image1_wyykjn.jpg' alt='anime visual'/>
            </div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, ease: easeInOut }} transition={{ duration: .8, delay: 3}} viewport={{ once: true }} className='about-skills'>
          <div className='skills-title'>
            <div className='title-round'>
              {/* <div className='skill-round'></div>  */}
              <motion.h4 onClick={() => setSkills('frontend')} initial={{ x: 0 }} animate={{ x: skills === 'frontend' ? -40 : 0, ease: 'ease' }}>Frontend</motion.h4>
            </div>
            <div className='title-round'>
              {/* <div className='skill-round'></div>  */}
              <motion.h4 onClick={() => setSkills('backend')} initial={{ x: 0 }} animate={{ x: skills === 'backend' ? -40 : 0, ease: 'ease' }} >Backend</motion.h4>
            </div>
            <div className='title-round'> 
              {/* <div className='skill-round'></div>  */}
              <motion.h4 onClick={() => setSkills('other')} initial={{ x: 0 }} animate={{ x: skills === 'other' ? -40 : 0, ease: 'ease' }}>Other</motion.h4>
            </div>
          </div>
          <div className='skills-render'>
            {skillsFilter?.map(skill => {
              return (
                <motion.h5 key={skill.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { duration: .8}}}>{skill.language}</motion.h5>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
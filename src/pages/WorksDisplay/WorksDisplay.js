import React, { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { useParams, Link } from 'react-router-dom'
import selectedWorks from '../../utils/works'
import WrongPage from '../WrongPage/WrongPage'
import './works-display.scss'
import Magnetic from '../../components/Magnetic/Magnetic'
import { motion, easeIn } from 'framer-motion'

function WorksDisplay() {
  const { workTitle } = useParams();

  const [works, setWorks] = useState()

  useEffect(function() {
    setWorks(selectedWorks?.find(work => {
      return work.title === workTitle
    }))

  }, [workTitle, works])

  return (
    <div>
      {works !== undefined ? (
        <div className='works-display-content'>
          <div className='works-all'>
            <div className='works-display-info'>
              <motion.div className='works-opening'>
                <motion.h3 initial={{ y: 150}} animate={{ y: 0, ease: easeIn}}  transition={{ duration: 1.2, delay: .5}}>{works?.opening}</motion.h3>
              </motion.div>
              <motion.div className='works-clicks' initial={{ opacity: 0}} whileInView={{ opacity: 1, ease: easeIn}} transition={{ duration: 1.2, delay: .6}} viewport={{once:true}}>
                <a href={works?.link} target='_blank' rel='noreferrer'><div>
                  <p>Visit the Website</p>
                  <i className='bx bx-up-arrow-alt'></i>
                </div>
                </a>
                <a href={`https://github.com/${works?.github}`} target='_blank' rel='noreferrer'>
                  <div>
                    <p>Visit Github</p>
                    <i className='bx bx-up-arrow-alt'></i>
                  </div>
                </a>
              </motion.div>
              <div className='works-general'>
                <motion.div className='year-roles' initial={{ opacity: 0}} whileInView={{ opacity: 1, ease: easeIn}} transition={{ duration: 1.2, delay: .7}} viewport={{once:true}}>
                  <div className='year'>
                    <p className='title'>Year</p>
                    <p>{works?.year}</p>
                  </div>
                  <div className='roles'>
                    <p className='title'>Roles</p>
                    <div>
                      {works?.roles.map(role => {
                        return <p key={role}>{role}</p>
                      })}
                    </div>
                  </div>
                </motion.div>
                <motion.div className='roles-tools' initial={{ opacity: 0}} whileInView={{ opacity: 1, ease: easeIn}} transition={{ duration: 1.2, delay: .65}} viewport={{once:true}}>
                  <div className='tools'>
                    <p className='title'>Tools</p>
                    <div className='tools-content'>
                      <div>
                        {works?.technologies.length > 6 ? works?.technologies.slice(0,6).map(tech => {
                          return (
                            <p key={tech}>{tech}</p>
                          
                        )
                        }) : works?.technologies.map(tech => {
                          return (
                            <p key={tech}>{tech}</p>
                        )
                        })}
                      </div>
                      <div>
                        {works?.technologies.length > 5 ? works?.technologies.slice(6).map(tech => {
                          return (
                            <p key={tech}>{tech}</p>
                        )
                        }) : ''}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className='works-desc'>
                <div>
                  <motion.p initial={{ y: '100%'}} whileInView={{ y: 0, ease: easeIn}} transition={{ duration: 1.5, delay: .65}} viewport={{once:true}}>{works?.projectDescription}</motion.p>
                </div>
                <div>
                  <motion.p initial={{ y: '100%'}} whileInView={{ y: 0, ease: easeIn}} transition={{ duration: 1.5, delay: .65}} viewport={{once:true}} className='works-background'>{works?.backgroundDescription}</motion.p>
                </div>
              </div>
              <div className='works-links'>
                <Magnetic>
                <Link to={`/works/${selectedWorks[(((works?.id + 4) - 1) - 1) % 4]?.title}`}>
                  <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1, ease: easeIn}} transition={{ duration: 1.2, delay: 1}} viewport={{once:true}} className='works-next'>
                    <p>Prev</p>
                  </motion.div>
                </Link>
                </Magnetic>
                <Magnetic>
                <Link to={`/works/${selectedWorks[(((works?.id + 4) - 1) + 1) % 4]?.title}`}>
                  <motion.div initial={{ opacity: 0}} whileInView={{ opacity: 1, ease: easeIn}} transition={{ duration: 1.2, delay: 1.1}} viewport={{once:true}} className='works-next'>
                    <p>Next</p>
                  </motion.div>
                </Link>
                </Magnetic>
              </div>
              
            </div>
            <div className='works-display-images'>
              <motion.div className='background-img' initial={{ opacity: 0}} animate={{ opacity: 1, ease: easeIn}} transition={{ duration: 1.2, delay: .8}} viewport={{once:true}}>
                <motion.img initial={{ scale: .95}} whileInView={{ scale: 1, ease: easeIn}} transition={{ duration: 1, delay: .8}} viewport={{once:true}} src={works?.images[0]} alt={works?.description}/>
              </motion.div>
            </div>
          </div>
          <Carousel title={works?.title}/>
        </div>
      ) : <WrongPage/>}
        
    </div>
  )
}

export default WorksDisplay
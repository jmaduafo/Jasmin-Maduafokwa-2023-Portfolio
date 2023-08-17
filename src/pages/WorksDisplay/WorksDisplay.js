import React, { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { useParams, Link } from 'react-router-dom'
import selectedWorks from '../../utils/works'
import WrongPage from '../WrongPage/WrongPage'
import './works-display.scss'
import Magnetic from '../../components/Magnetic/Magnetic'
import { motion } from 'framer-motion'

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
              <div className='works-opening'>
                <h3>{works?.opening}</h3>
              </div>
              <div className='works-clicks'>
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
              </div>
              <div className='works-general'>
                <div className='year-roles'>
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
                </div>
                <div className='roles-tools'>
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
                </div>
              </div>
              <div className='works-desc'>
                <p>{works?.projectDescription}</p>
                <p className='works-background'>{works?.backgroundDescription}</p>
              </div>
              <div className='works-links'>
                <Magnetic>
                <Link to={`/works/${selectedWorks[(((works?.id + 4) - 1) - 1) % 4]?.title}`}>
                  <div className='works-next'>
                    <p>Prev</p>
                  </div>
                </Link>
                </Magnetic>
                <Magnetic>
                <Link to={`/works/${selectedWorks[(((works?.id + 4) - 1) + 1) % 4]?.title}`}>
                  <div className='works-next'>
                    <p>Next</p>
                  </div>
                </Link>
                </Magnetic>
              </div>
              
            </div>
            <div className='works-display-images'>
                <div className='background-img'>
                  <img src={works?.images[0]} alt={works?.description}/>
                </div>
            </div>
          </div>
          <Carousel title={works?.title}/>
        </div>
      ) : <WrongPage/>}
        
    </div>
  )
}

export default WorksDisplay
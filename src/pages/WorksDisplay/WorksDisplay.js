import React, { useEffect, useState } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import { useParams, Link } from 'react-router-dom'
import selectedWorks from '../../utils/works'
import WrongPage from '../WrongPage/WrongPage'
import './works-display.scss'

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
              <div className='works-general'>
                <div className='year'>
                  <p>{works?.year}</p>
                </div>
                <div className='roles-tools'>
                  <div className='roles'>
                    <p className='title'>Roles</p>
                    <div>
                      {works?.roles.map(role => {
                        return <p key={role}>{role}</p>
                      })}
                    </div>
                  </div>
                  <div className='tools'>
                    <p className='title'>Tools</p>
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
              <div className='works-desc'>
                <p>{works?.projectDescription}</p>
                <p className='works-background'>{works?.backgroundDescription}</p>
              </div>
              <div className='works-links'>
                <div className='works-next'>
                  
                  <Link to={`/works/${selectedWorks[(((works?.id + 4) - 1) - 1) % 4]?.title}`}><p>Previous</p></Link>
                </div>
                {/* <a href={`https://github.com/${works?.github}`} target='_blank' rel='noreferrer'><i className='bx bxl-github' ></i></a> */}
                <div className='works-next'>
                  <Link to={`/works/${selectedWorks[(((works?.id + 4) - 1) + 1) % 4]?.title}`}><p>Next</p></Link>
                </div>
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
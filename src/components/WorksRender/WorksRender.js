import React, { useState } from 'react'
import './works-render.scss'
import selectedWorks from '../../utils/works'
import { LayoutGroup, motion} from 'framer-motion'
import { Link } from 'react-router-dom'

function WorksRender() {
  const [workHover, setWorkHover] = useState(false)
  return (
    <section>
      <div className='works-render-section'>
        {selectedWorks.map(works => {
          return (
            <LayoutGroup id={works.title} key={works.id}>
            <motion.div layout className='selected-works'>
              <div className='works-padding'>
                  <div className='selected-works-desc'>
                    <p>{works.projectDescription}</p>
                  </div>
                  <div className='selected-year-break'>
                    <p>{works.year}</p>
                    <div className='breakline'></div>
                  </div>
                  <div className='selected-title'>
                    <Link to={`/works/${works.title}`}><motion.h2 onMouseEnter={() => setWorkHover(true)} onMouseLeave={() => setWorkHover(false)} initial={{ x: 0 }} animate={{ x: workHover ? -40 : 0}} layoutId={works.id}>{works.title}</motion.h2></Link>
                    <motion.i layoutId='works' initial={{ x: -40, y: 0, rotate: '45deg' }} animate={{ x: workHover ? -20 : -40, y: workHover ? -20 : 0, rotate: '45deg'}} className='bx bx-up-arrow-alt' ></motion.i>
                  </div>
              </div>
              <div className='selected-image' style={{backgroundImage: `url(${works.landscapeImage})`}}></div>
            </motion.div>
            </LayoutGroup>
            
          )
        })}
        
      </div>
    </section>
  )
}

export default WorksRender
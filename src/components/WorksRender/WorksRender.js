import React, { useState } from 'react'
import './works-render.scss'
import selectedWorks from '../../utils/works'
import { motion, easeInOut} from 'framer-motion'
import { Link } from 'react-router-dom'

function WorksRender() {
  const [imageHover, setImageHover] = useState(false)

  return (
    <section>
      <div className='works-render-section'>
        {selectedWorks.map(works => {
          return (
            <motion.div initial={{opacity: 0, y: 60, borderRadius: '0% 0% 50% 50%'}} whileInView={{ opacity: 1, y: 0, borderRadius: '0%', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', ease: easeInOut}} transition={{ duration: 1.2, delay: 1}} viewport={{once: true}} layout key={works.id} className='selected-works'>
              <div className='works-padding'>
                  <div className='selected-works-desc'>
                    <p>{works.projectDescription}</p>
                  </div>
                  <div className='selected-year-break'>
                    <p>{works.year}</p>
                    <div className='breakline'></div>
                  </div>
                  <div className='selected-title'>
                    <Link to={`/works/${works.title}`}><motion.h2 onMouseEnter={() => setImageHover(true)} onMouseLeave={() => setImageHover(false)} >{works.title}</motion.h2></Link>
                    <motion.i layoutId='works' className='bx bx-up-arrow-alt' ></motion.i>
                  </div>
              </div>
              <motion.div layoutId={works.id} className='selected-image' style={{backgroundImage: `url(${works.landscapeImage})`, transform: imageHover ? 'scale(.95)' : '', borderRadius: imageHover ? '50%' : ''}}></motion.div>
            </motion.div>
          )
        })}
        
      </div>
    </section>
  )
}

export default WorksRender
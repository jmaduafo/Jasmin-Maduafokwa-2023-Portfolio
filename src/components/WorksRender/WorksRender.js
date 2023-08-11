import React from 'react'
import './works-render.scss'
import selectedWorks from '../../utils/works'

function WorksRender() {
  return (
    <section>
      <div className='works-render-section'>
        {selectedWorks.map(works => {
          return (
            <div key={works.id} className='selected-works'>
              <div className='works-padding'>
                  <div className='selected-works-desc'>
                    <p>{works.projectDescription}</p>
                  </div>
                  <div className='selected-year-break'>
                    <p>{works.year}</p>
                    <div className='breakline'></div>
                  </div>
                  <div className='selected-title'>
                    <h2>{works.title}</h2>
                    <i className='bx bx-up-arrow-alt' ></i>
                  </div>
              </div>
              <div className='selected-image' style={{backgroundImage: `url(${works.landscapeImage})`}}></div>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default WorksRender
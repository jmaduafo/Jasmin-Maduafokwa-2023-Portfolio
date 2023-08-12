import React from 'react'
import './works.scss'
import Breakpoint from '../Breakpoint/Breakpoint'
import WorksRender from '../WorksRender/WorksRender'

function Works({scrollYProgress}) {
  return (
    <div>
        <Breakpoint name={'selected works'} link={'works'}/>
        <WorksRender/>
    </div>
  )
}

export default Works
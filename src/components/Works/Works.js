import React from 'react'
import './works.scss'
import Breakpoint from '../Breakpoint/Breakpoint'
import WorksRender from '../WorksRender/WorksRender'

function Works() {
  return (
    <div id='works'>
        <Breakpoint name={'selected works'} link={'work'}/>
        <WorksRender/>
    </div>
  )
}

export default Works
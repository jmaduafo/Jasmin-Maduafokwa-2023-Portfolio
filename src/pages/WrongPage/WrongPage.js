import React from 'react'
import './wrong-page.scss'
import Carousel from '../../components/Carousel/Carousel'

function WrongPage() {
  return (
    <div className='error-page'>
      <div className='error-content'>
        <h1>404</h1>
        <p>Whoops! Something went wrong! Please check the route or navigate to home.</p>
      </div>
      <Carousel title={'Error'}/>
    </div>
  )
}

export default WrongPage
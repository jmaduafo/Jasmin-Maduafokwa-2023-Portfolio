import React from 'react'
import './wrong-page.scss'
import Carousel from '../../components/Carousel/Carousel'
import { Link } from 'react-router-dom'

function WrongPage() {
  return (
    <div className='error-page'>
      <div className='error-content'>
        <h1>404</h1>
        <p>Whoops! Something went wrong! Please check the route or navigate to <Link to='/'><span style={{ textDecoration: 'underline', cursor: 'pointer'}}>home</span></Link>.</p>
      </div>
      <Carousel title={'Error'}/>
    </div>
  )
}

export default WrongPage
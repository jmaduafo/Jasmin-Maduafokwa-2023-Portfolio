import React from 'react'
import './home-intro.scss'
import mainImage from '../../assets/images/home-intro-main-image.jpg'

function HomeIntro() {
  return (
    <section>
      <div className='home-intro-section'>
        <div className='home-intro-name-info'>
          <div className='home-intro-name'>
            <h1>I'm Jasmine,</h1>
          </div>
          <div className='home-intro-info'>
            <p>a self-taught full stack developer with a deep passion for design and learning. I'm an innovative thinker seeking to use my mathematics background and design sense to create fully-functioning, eye-catching websites and apps created both independently and in team-based workspaces.</p>
          </div>
          <div className='spinning-button'>
            <div>
              <div className='home-intro-button'>
                <i className='bx bx-down-arrow-alt' ></i>
              </div>
            </div>
          </div>
          <div className='home-intro-main-image'>
            <img src={mainImage} alt='wild plant'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeIntro
import React from 'react'
import Stats from '../components/Stats'
import './styles/About.css'

const About = (props) => {
  return (
    <div className='about_wrapper'>
      <div className='about_text'>
        <div className='about_heading'>
          <h1>
          About
          </h1>
          <img
          src="http://logo-hack.surge.sh/hackerstellar.png"
          alt=""
          className="home_logo"
        ></img>
          </div>

      </div>
    <Stats current={props.current}/>
    </div>
  )
}

export default About
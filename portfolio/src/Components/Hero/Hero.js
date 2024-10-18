import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile_img.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Sanjay_Resume_Sep.pdf'; 

const Hero = () => {
  const handleViewResume = () => {
    // Open resume in a new tab
    window.open( resume, '_blank');
  };


  return (
    <div id='home' className='hero'>
      <img  src={profile_img} alt="profile_img"/>
      <h1> <span>I'm Sanjay R,</span> Fullstack Developer based in Bengaluru.</h1>
      <p>I am a fullstack developer from Bengaluru, India with 3 years of experience and worked with companies like Accenture</p>
      <div className='hero-action'>
           <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href="#contact"> Connect with me</AnchorLink></div>
           <div className='hero-resume' onClick={handleViewResume}>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
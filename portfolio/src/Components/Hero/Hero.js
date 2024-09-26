import React from 'react'
import './Hero.css'
import profile_img from "../../assets/profile_img.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img  src={profile_img} alt="profile_img"/>
      <h1> <span>I'm Sanjay R,</span> Fullstack Developer based in Bengaluru.</h1>
      <p>I am a fullstack developer from Bengaluru, India with 3 years of experieence and worked with companies like Accenture</p>
      <div className='hero-action'>
           <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href="#contact"> Connect with me</AnchorLink></div>
           <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
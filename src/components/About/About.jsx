import React from 'react'
import './About.css'
import profilePic from '../../assets/profile_pic.JPG'

const About = () => {
  return (
    <div id="about">
      <div className="about-text">
        <h1>ABOUT ME</h1>
        <p>
          I’m Gauraang Thakkar, an 18-year-old IT student at DJSCE Mumbai with a passion for blending technology, 
          creativity, and problem-solving. I’m currently honing my skills in web development (HTML, CSS, JavaScript, React) 
          while exploring the exciting realms of AI/ML, blockchain, and data structures to shape myself into a versatile engineer. 
          Beyond coding, I’m a fitness enthusiast, digital content creator, and an aspiring innovator who enjoys turning ideas 
          into impactful projects—whether it’s building practical apps, crafting engaging YouTube content, or exploring futuristic 
          tech concepts. My ultimate goal is to create solutions that inspire, empower, and make a real difference.
        </p>
      </div>

      <img src={profilePic} alt="Profile" className="profilePic" />
    </div>
  )
}

export default About

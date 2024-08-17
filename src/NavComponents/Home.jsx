import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container padding-top">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
       <p>Hi, I'm Naga Bhavani Prasad Ramisetti. I'm a UI Developer specializing in creating engaging and intuitive user interfaces with modern web technologies.</p>
        <div className="cta-buttons">
          <Link to="/projects" className="cta-primary">View My Work</Link>
          <Link to="/contact" className="cta-secondary">Contact Me</Link>
        </div>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/naga-bhavani-prasad-ramisetti-b426b9287/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:bhavaniprasadramisetti999@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
    </div>
  )
}

export default Home
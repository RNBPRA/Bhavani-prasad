import React from 'react';
import { FaUserGraduate, FaBriefcase, FaCode, FaMedal } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src="/bhavani prasad.png" alt="Your Name" />
        </div>
        <div className="about-text">
          <p>I'm a passionate web developer with a keen eye for design and a love for creating seamless user experiences. With [X] years of experience in the industry, I've had the opportunity to work on a diverse range of projects that have honed my skills and fueled my creativity.</p>
        </div>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <FaUserGraduate className="timeline-icon" />
          <h3>Education</h3>
          <p>B.S. in Computer Science, University Name, Year</p>
        </div>
        <div className="timeline-item">
          <FaBriefcase className="timeline-icon" />
          <h3>Work Experience</h3>
          <p>Senior Web Developer, Company Name, Year - Present</p>
        </div>
        <div className="timeline-item">
          <FaCode className="timeline-icon" />
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="timeline-item">
          <FaMedal className="timeline-icon" />
          <h3>Achievements</h3>
          <p>Winner, Web Development Hackathon 2022</p>
        </div>
      </div>
    </div>
  );
};

export default About;
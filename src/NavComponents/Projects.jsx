import React from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'

const Projects = () => {
  const projects = [
    { id: 1, title: "E-commerce Dashboard", description: "A responsive admin dashboard for managing online store data", image: "https://cdn.pixabay.com/photo/2020/08/03/10/00/credit-card-5459711_960_720.png", route: "/ecommercedashboard" },
    { id: 2, title: "Weather App", description: "Real-time weather forecasting app with geolocation", image: "https://image.winudf.com/v2/image1/bW9iaS5pbmZvbGlmZS5lendlYXRoZXIud2lkZ2V0LnJpcHBsZTJfc2NyZWVuXzlfMTU1NTA0OTA1MF8wNDM/screen-9.jpg?fakeurl=1&type=.jpg", route: "/weatherapp" },
    { id: 3, title: "Task Manager", description: "Collaborative task management tool with drag-and-drop interface", image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/68e44591534255.5e341689e822c.jpg", route: "/taskmanager" },
    { id: 4, title: "Fitness Tracker", description: "Mobile-friendly app for tracking workouts and nutrition", image: "https://i.pinimg.com/originals/a2/60/8c/a2608cdfd130353477f8d9f62b790367.jpg", route: "/fitnesstracker" },
    { id: 5, title: "Social Media Dashboard", description: "Centralized dashboard for managing multiple social media accounts", image: "https://www.sotrender.com/blog/wp-content/uploads/2021/06/good-social-media-dashboard-example.png", route: "/socialmediadashboard" },
  ]

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <Link to={project.route} className="project-button">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
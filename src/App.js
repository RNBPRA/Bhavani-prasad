import './App.css';
import Navbar from './Navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './NavComponents/Home';
import About from './NavComponents/About';
import Projects from './NavComponents/Projects';
import Contact from './NavComponents/Contact';
import EcommerceDashboard from './Projects/E-commerce-Dashboard';
import FitnessTracker from './Projects/Fitness-Tracker';
import SocialMediaDashboard from './Projects/Social-Media-Dashboard';
import WeatherApp from './Projects/Weather-App';
import TaskManager from './Projects/Task-Manager';



function App() {
  return (
    
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path='/ecommercedashboard' element={<EcommerceDashboard />} />
          <Route path='/fitnesstracker' element={<FitnessTracker />} />
          <Route path='/socialmediadashboard' element={<SocialMediaDashboard />} />
          <Route path="/weatherApp" element={<WeatherApp />} />
          <Route path='/taskmanager' element={<TaskManager />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
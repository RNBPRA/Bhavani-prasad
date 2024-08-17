import React from 'react'
import { motion } from 'framer-motion'
import { FaShoppingCart, FaChartLine, FaUsers, FaCog, FaLock, FaGlobe, FaBoxOpen, FaTruck, FaMoneyBillWave, FaReact, FaNodeJs, FaAws } from 'react-icons/fa'
import './EcommerceDashboard.css'

const EcommerceDashboard = () => {
  return (
    <motion.div 
      className="ecommerce-dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1 className="dashboard-title">E-commerce Dashboard</h1>
          <p className="dashboard-description">
            Powerful insights and management tools for your online store
          </p>
        </header>

        <div className="dashboard-grid">
          <motion.div className="dashboard-card" whileHover={{ scale: 1.05 }}>
            <FaShoppingCart className="card-icon" />
            <h3>Sales Overview</h3>
            <p>$12,345 this month</p>
          </motion.div>
          <motion.div className="dashboard-card" whileHover={{ scale: 1.05 }}>
            <FaUsers className="card-icon" />
            <h3>Active Users</h3>
            <p>1,234 online now</p>
          </motion.div>
          <motion.div className="dashboard-card" whileHover={{ scale: 1.05 }}>
            <FaBoxOpen className="card-icon" />
            <h3>Products</h3>
            <p>567 in stock</p>
          </motion.div>
          <motion.div className="dashboard-card" whileHover={{ scale: 1.05 }}>
            <FaTruck className="card-icon" />
            <h3>Orders</h3>
            <p>89 pending</p>
          </motion.div>
        </div>

        <section className="dashboard-features">
          <h2>Key Features</h2>
          <div className="features-grid">
            <motion.div className="feature-item" whileHover={{ scale: 1.05 }}>
              <FaChartLine className="feature-icon" />
              <p>Advanced Analytics</p>
            </motion.div>
            <motion.div className="feature-item" whileHover={{ scale: 1.05 }}>
              <FaCog className="feature-icon" />
              <p>Inventory Management</p>
            </motion.div>
            <motion.div className="feature-item" whileHover={{ scale: 1.05 }}>
              <FaLock className="feature-icon" />
              <p>Secure Payments</p>
            </motion.div>
            <motion.div className="feature-item" whileHover={{ scale: 1.05 }}>
              <FaGlobe className="feature-icon" />
              <p>Multi-language Support</p>
            </motion.div>
            <motion.div className="feature-item" whileHover={{ scale: 1.05 }}>
              <FaMoneyBillWave className="feature-icon" />
              <p>Revenue Forecasting</p>
            </motion.div>
          </div>
        </section>

        <section className="dashboard-description">
          <h2>About Our E-commerce Dashboard</h2>
          <p>Our state-of-the-art E-commerce Dashboard provides a comprehensive solution for online businesses. It offers real-time analytics, inventory management, and sales forecasting to help you make data-driven decisions and grow your business efficiently.</p>
        </section>

        <section className="dashboard-technologies">
          <h2>Technologies We Use</h2>
          <div className="tech-icons">
            <FaReact title="React" />
            <FaNodeJs title="Node.js" />
            <FaAws title="Amazon Web Services" />
          </div>
          <p>We leverage cutting-edge technologies to ensure a robust, scalable, and secure e-commerce solution.</p>
        </section>

        <section className="dashboard-clients">
          <h2>What Our Clients Say</h2>
          <div className="client-testimonials">
            <blockquote>"This dashboard revolutionized our online business. We've seen a 30% increase in sales since implementation." - Jane Doe, CEO of Fashion Co.</blockquote>
            <blockquote>"The insights provided by this tool are invaluable. It's like having a business analyst on staff 24/7." - John Smith, Owner of Tech Gadgets</blockquote>
          </div>
        </section>

        <section className="dashboard-cta">
          <h2>Ready to optimize your e-commerce business?</h2>
          <a href="#" className="cta-button">Get Started Now</a>
        </section>
      </div>
    </motion.div>
  )
}

export default EcommerceDashboard
import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <motion.div
          className="about-simple-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="about-text-simple">
            <p>
              Hello! 👋 I'm <strong>Rabina Kumari</strong>, a passionate Software Engineer 
              focused on building modern web applications and solving real-world problems 
              through code.
            </p>
            
            <p>
              Currently learning and growing at <strong>Navgurukul</strong>, I specialize 
              in Full Stack Development and love creating responsive, user-friendly applications 
              that make a difference.
            </p>
            
            <p>
              When I'm not coding, I'm exploring new technologies, working on personal projects, 
              and contributing to the developer community. Always excited to learn and take on 
              new challenges!
            </p>
          </div>

          <div className="about-stats-simple">
            <div className="stat-box">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <h3>15+</h3>
              <p>Technologies Learned</p>
            </div>
            <div className="stat-box">
              <h3>2+</h3>
              <p>Years of Learning</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

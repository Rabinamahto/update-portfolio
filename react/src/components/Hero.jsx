import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

export default function Hero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi, I'm <br /><span>Rabina Kumari</span></h1>
          <div className="typing-container">
            <TypeAnimation
              sequence={[
                'BCA Student',
                2000,
                'Web Developer',
                2000,
                'Full Stack Developer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>
          <p>Building innovative solutions with modern technologies. Passionate about creating impactful software that makes a difference.</p>
          
          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1sCjyCIxWht7KJQ_t93t1TnQySwnqDRnm/view?usp=sharing" target="_blank" rel="noreferrer" className="resume-btn">
              <FaDownload /> Download Resume
            </a>
            <a href="#contact" className="contact-btn">Get In Touch</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/Rabinamahto" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rabina-kumari-92599b338/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div 
            className="image-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="image-shape">
              <div className="floating-circle circle-1"></div>
              <div className="floating-circle circle-2"></div>
              <div className="floating-circle circle-3"></div>
              <motion.div 
                className="image-wrapper"
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img src="/img.png" alt="Rabina's photo" />
                <div className="image-border"></div>
              </motion.div>
            </div>
            <div className="decorative-dots">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="dot" style={{ '--i': i }}></span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

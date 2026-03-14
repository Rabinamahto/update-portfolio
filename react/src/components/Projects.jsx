import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const sampleProjects = [
  {
    id: 1,
    title: 'NG-Borrow Web Application',
    desc: 'A real-life team project developed at NavGurukul to create a functional platform solving real-world problems. Built with React, JavaScript, HTML, and CSS, focusing on collaboration and modern web development practices.',
    link: 'https://jolly-madeleine-027391.netlify.app',
    github: 'https://github.com/Rabinamahto/NG-Borrow',
    tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Full Stack', 'Real-Life Project'],
    category: 'React',
    image: '/image.png',
    fallbackGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    id: 2,
    title: 'NGO Website',
    desc: 'A professional NGO website built with React to help non-profit organizations showcase their mission, activities, and impact. Features modern design and user-friendly interface.',
    link: 'https://tiny-sherbet-6be9dc.netlify.app',
    github: '#',
    tech: ['React', 'JavaScript', 'CSS', 'Web Design'],
    category: 'React',
    image: '/image copy 2.png',
    fallbackGradient: 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)'
  },
  {
    id: 3,
    title: 'Bihar Culture Web Museum',
    desc: 'A team project showcasing Bihar\'s culture, traditions, and heritage. Provides information about cultural places and districts of Bihar, along with details about the School of Programming (SOP) and its students.',
    link: 'https://kaleidoscopic-smakager-4a9960.netlify.app/',
    github: '#',
    tech: ['JavaScript', 'HTML', 'CSS', 'Team Project'],
    category: 'JavaScript',
    image: '/image copy.png',
    fallbackGradient: 'linear-gradient(135deg, #FF6B6B 0%, #FFE66D 100%)'
  },
  {
    id: 4,
    title: 'Guessing Number Game',
    desc: 'An interactive game where players guess a randomly generated number with hints and scoring system.',
    link: 'https://transcendent-babka-1a9957.netlify.app',
    github: 'https://github.com/rabinakumari',
    tech: ['JavaScript', 'HTML', 'CSS'],
    category: 'JavaScript',
    image: '/image copy 3.png',
    fallbackGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }
]

function ProjectCard({ p, index }) {
  const [imageError, setImageError] = useState(false)
  
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* Project Image/Screenshot */}
      <div className="project-image-wrapper">
        {!imageError ? (
          <img 
            src={p.image} 
            alt={p.title}
            className="project-screenshot"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="project-fallback" style={{ background: p.fallbackGradient }}>
            <div className="fallback-icon">
              {p.category === 'React' ? '⚛️' : '🎮'}
            </div>
          </div>
        )}
      </div>
      
      {/* Project Info */}
      <div className="project-info">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        
        {/* Tech Stack */}
        <div className="project-tech">
          {p.tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="project-buttons">
          {p.github !== '#' && (
            <a href={p.github} target="_blank" rel="noreferrer" className="project-btn btn-github">
              <FaGithub />
              <span>GitHub</span>
            </a>
          )}
          <a href={p.link} target="_blank" rel="noreferrer" className="project-btn btn-live">
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ projects = sampleProjects }) {
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', ...new Set(projects.map(p => p.category))]
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>My Projects</h2>
          <p className="section-subtitle">Here are some of my recent works</p>
        </motion.div>

        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filteredProjects.map((p, index) => (
            <ProjectCard key={p.id} p={p} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

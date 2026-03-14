import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt, FaGithub, 
  FaPython, FaDocker, FaAws, FaFigma, FaDatabase, FaFire, FaGoogle, FaFileAlt, FaTable, FaFilePowerpoint 
} from 'react-icons/fa'
import { 
  SiTypescript, SiMongodb, SiPostgresql, SiExpress, SiTailwindcss,
  SiNextdotjs, SiRedux, SiPostman, SiCanva, SiFirebase, SiGoogledocs
} from 'react-icons/si'

const skillsData = {
  'Technical Skills': [
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
    { name: 'React.js', icon: FaReact, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', icon: FaNode, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, color: '#000000' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'REST APIs', icon: FaDatabase, color: '#FF6C37' },
  ],
  'Tools': [
    { name: 'Git', icon: FaGitAlt, color: '#F05032' },
    { name: 'GitHub', icon: FaGithub, color: '#181717' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
    { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
    { name: 'Google Docs', icon: SiGoogledocs, color: '#4285F4' },
    { name: 'Google Sheets', icon: FaTable, color: '#34A853' },
    { name: 'Google Slides', icon: FaGoogle, color: '#FBBC04' },
    { name: 'PowerPoint', icon: FaFilePowerpoint, color: '#D04423' },
  ],
  'Soft Skills': [
    { name: 'Problem Solving' },
    { name: 'Communication' },
    { name: 'Team Collaboration' },
    { name: 'Leadership' },
    { name: 'Time Management' },
    { name: 'Adaptability' },
    { name: 'Confidence' },
    { name: 'Discipline' },
  ]
}

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = skill.icon

  return (
    <motion.div
      ref={ref}
      className="skill-item"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="skill-header">
        {Icon && <Icon className="skill-icon" style={{ color: skill.color }} />}
        <span className="skill-name">{skill.name}</span>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Technical Skills')

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <div className="skills-tabs">
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              className={`skill-tab ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skillsData[activeCategory].map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Discipline Coordinator',
    company: 'NavGurukul Campus',
    period: '4 Months (2024)',
    description: 'Managing discipline and maintaining a positive environment among students. Coordinating with council members to resolve conflicts and encourage students to follow campus rules. Supporting cleanliness and proper waste management initiatives.',
    skills: ['Leadership', 'Communication', 'Conflict Resolution', 'Team Coordination']
  },
  {
    id: 2,
    type: 'work',
    title: 'Waste Management Initiative - Volunteer',
    company: 'NavGurukul Campus',
    period: '4 Months (2024)',
    description: 'Promoted cleanliness and proper waste disposal to maintain a healthy campus environment. Encouraged students to use proper waste bins and spread awareness about responsible waste management practices.',
    skills: ['Environmental Awareness', 'Community Service', 'Organization', 'Student Engagement']
  }
]

function TimelineItem({ exp, index }) {
  const Icon = exp.type === 'work' ? FaBriefcase : FaGraduationCap

  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="timeline-icon">
        <Icon />
      </div>
      <div className="timeline-content">
        <span className="timeline-period">{exp.period}</span>
        <h3>{exp.title}</h3>
        <h4>{exp.company}</h4>
        <p>{exp.description}</p>
        <div className="timeline-skills">
          {exp.skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

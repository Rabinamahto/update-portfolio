import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendar, FaBook } from 'react-icons/fa'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institute: 'Indira Gandhi National Open University (IGNOU)',
      duration: '2025 - Present',
      description: 'Currently in 2nd Semester. Studying computer science fundamentals, programming concepts, and software development basics. Building strong knowledge in computer applications and modern technology to become a skilled software professional.'
    },
    {
      degree: 'Web Development Program',
      institute: 'NavGurukul Foundation',
      duration: 'May 2024 - Present',
      description: 'Intensive training in Web Development (HTML, CSS, JavaScript, React), Logic Building, and Data Structures. Building real-world projects, collaborating with peers, and continuously improving problem-solving and coding skills through hands-on practice.'
    }
  ]

  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Education</h2>
          <p className="section-subtitle">My academic journey and learning path</p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              
              <div className="education-content">
                <h3>{edu.degree}</h3>
                
                <div className="education-info">
                  <div className="info-item">
                    <FaBook />
                    <span>{edu.institute}</span>
                  </div>
                  <div className="info-item">
                    <FaCalendar />
                    <span>{edu.duration}</span>
                  </div>
                </div>

                <p className="education-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

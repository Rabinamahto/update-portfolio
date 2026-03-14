import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Header({ onToggleTheme, theme }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            <span className="logo-gradient">Rabina</span> Kumari
          </a>
          
          <ul className={`nav-links ${mobileMenu ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setMobileMenu(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setMobileMenu(false)}>Experience</a></li>
            <li><a href="#education" onClick={() => setMobileMenu(false)}>Education</a></li>
            <li><a href="#skills" onClick={() => setMobileMenu(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMobileMenu(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
              {theme === 'dark-mode' ? '☀️' : '🌙'}
            </button>
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

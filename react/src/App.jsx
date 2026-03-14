import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CertificatesModal from './components/CertificatesModal'
import ImageModal from './components/ImageModal'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  const [showCertModal, setShowCertModal] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [certImage, setCertImage] = useState('')
  const [certTitle, setCertTitle] = useState('')
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme)
      setTheme(savedTheme)
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark-mode')
      setTheme('dark-mode')
    }
  }, [])

  function toggleTheme() {
    const next = theme === 'dark-mode' ? '' : 'dark-mode'
    if (theme) document.documentElement.classList.remove(theme)
    if (next) document.documentElement.classList.add(next)
    setTheme(next)
    if (next) localStorage.setItem('theme', next)
    else localStorage.removeItem('theme')
  }

  function openImageModal(imgPath, title) {
    setCertImage(imgPath)
    setCertTitle(title)
    setShowCertModal(false)
    setShowImageModal(true)
    document.body.classList.add('modal-open')
  }

  function closeImageModal() {
    setShowImageModal(false)
    document.body.classList.remove('modal-open')
  }

  return (
    <>
      <ScrollProgress />
      <Header onToggleTheme={toggleTheme} theme={theme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <CertificatesModal open={showCertModal} onClose={() => { setShowCertModal(false); document.body.classList.remove('modal-open') }} onOpenImage={openImageModal} />
      <ImageModal open={showImageModal} imageSrc={certImage} title={certTitle} onClose={closeImageModal} />
    </>
  )
}

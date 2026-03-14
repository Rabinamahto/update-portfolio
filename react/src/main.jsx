import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './App.css'
import './modern-styles.css'
import './image-effects.css'
import './about-styles.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

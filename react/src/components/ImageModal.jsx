import React from 'react'

export default function ImageModal({ open, imageSrc, title, onClose }) {
  if (!open) return null

  return (
    <div id="image-modal" className="certificate-modal" style={{display:'flex'}}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3 id="cert-title">{title}</h3>
        <img id="cert-image" src={imageSrc} alt={title} style={{maxWidth: '100%', borderRadius: '10px'}} />
      </div>
    </div>
  )
}

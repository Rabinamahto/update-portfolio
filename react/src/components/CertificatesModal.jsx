import React from 'react'

export default function CertificatesModal({ open, onClose, onOpenImage }) {
  if (!open) return null

  return (
    <div id="certificate-modal" className="certificate-modal" style={{display:'flex'}}>
      <div className="modal-content">
        <span id="close-modal" className="close" onClick={onClose}>&times;</span>
        <h3>My Certificates</h3>
        <div className="certificate-list">
          <div className="certificate-item">
            <h4>Diploma Certificate - Alison</h4>
            <p>Successfully completed a Diploma course from Alison. This diploma is CPD Certified.</p>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenImage('/Diploma.jpg', 'Diploma Certificate - Alison') }}>View Certificate</a>
          </div>

          <div className="certificate-item">
            <h4>Certificate of Completion – EmpowerHER: Financial Literacy Program</h4>
            <p>Rabina Kumari successfully completed the EmpowerHER program in February 2025, organized by CSRL in collaboration with Kriya Foundation.</p>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenImage('/Rabina.png', 'Certificate of Completion – EmpowerHER') }}>View Certificate</a>
          </div>
        </div>
      </div>
    </div>
  )
}

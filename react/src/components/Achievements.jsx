import React from 'react'

export default function Achievements({ onOpenCertificates }) {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2>Achievements &amp; Leadership</h2>
        <div className="achievements-grid">
          <div className="experience-card card">
            <h3>Discipline Coordinator (DISCO)</h3>
            <p><strong>Organization:</strong> NavGurukul Foundation</p>
            <p><strong>Duration:</strong> 3 Months</p>
            <p>At NavGurukul, I maintained discipline among <strong>85+ students</strong>, resolved conflicts, promoted respectful behavior, ensured timely attendance, and fostered a positive learning environment. Awarded a <strong>Certificate of Appreciation</strong> for leadership.</p>
          </div>

          <div className="certificate-card card">
            <h3>Certificates</h3>
            <p>Click the button below to view all my certificates:</p>
            <button onClick={onOpenCertificates} className="certificate-btn">View Certificates</button>
          </div>
        </div>
      </div>
    </section>
  )
}

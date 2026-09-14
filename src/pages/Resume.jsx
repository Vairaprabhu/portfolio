import { Download, FileText } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Resume() {
  const [hasResume, setHasResume] = useState(false)

  useEffect(() => {
    const path = '/resume.pdf'
    fetch(path, { method: 'HEAD' })
      .then((response) => setHasResume(response.ok))
      .catch(() => setHasResume(false))
  }, [])

  if (!hasResume) {
    return (
      <div className="page-shell section-space">
        <div className="container narrow-container center-text">
          <FileText size={40} />
          <h1>Resume coming soon.</h1>
          <a href="/contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell section-space">
      <div className="container narrow-container center-text">
        <h1>Resume</h1>
        <div className="resume-frame">
          <iframe title="Vairaprabhu resume" src="/resume.pdf" />
        </div>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          <Download size={16} /> Download Resume
        </a>
      </div>
    </div>
  )
}

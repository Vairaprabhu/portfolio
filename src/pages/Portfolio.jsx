import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'
import { getWhatsAppUrl } from '../config/contact'

export default function Portfolio() {
  return (
    <div className="page-shell section-space">
      <div className="container">
        <SectionHeading
          eyebrow="Work"
          title="Selected Work"
          description="I’m currently building my freelance portfolio. New projects will appear here soon."
          align="center"
        />

        {projects.length === 0 ? (
          <div className="empty-work-box portfolio-empty">
            <div className="work-illustration">
              <div className="w-window">
                <div className="w-bar" />
                <div className="w-body" />
              </div>
            </div>
            <h3>New work coming soon.</h3>
            <p>Have a project you&apos;d like to see here?</p>
            <Button href={getWhatsAppUrl()} external>Start a Project</Button>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        <div className="cta-inline centered">
          <Link to="/contact" className="inline-link">
            Have a project in mind? <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

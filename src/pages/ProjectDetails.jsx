import { ArrowLeft, ArrowUpRight, GitBranch } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <div className="page-shell section-space">
        <div className="container narrow-container center-text">
          <span className="eyebrow">Project not found</span>
          <h1>That project isn&apos;t available right now.</h1>
          <p>The selected work is not currently published.</p>
          <Link to="/portfolio" className="btn btn-primary">
            Back to portfolio
          </Link>
        </div>
      </div>
    )
  }

  const relatedProjects = projects.filter((item) => item.id !== project.id)
  const nextProject = relatedProjects[0]

  return (
    <div className="page-shell section-space">
      <div className="container narrow-container">
        <Link to="/portfolio" className="inline-link back-link">
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <div className="project-header">
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
        </div>

        <div className="project-hero visual-card">
          <div className="project-visual" />
        </div>

        <div className="project-sections">
          <div className="project-panel">
            <h3>Overview</h3>
            <p>{project.overview || project.description}</p>
          </div>
          <div className="project-panel">
            <h3>Challenge</h3>
            <p>{project.challenge || 'This project was shaped around clear user needs and practical business goals.'}</p>
          </div>
          <div className="project-panel">
            <h3>Approach</h3>
            <p>{project.approach || 'A modern, thoughtful implementation focused on usability, performance and conversion.'}</p>
          </div>
          <div className="project-panel">
            <h3>Key Features</h3>
            <ul className="check-list">
              {(project.features || ['Responsive UI', 'Modern frontend', 'Practical business workflow']).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="project-panel">
            <h3>Design Direction</h3>
            <p>{project.designDirection || 'Clean, conversion-focused interface with minimal distractions and clarity at every step.'}</p>
          </div>
          <div className="project-panel">
            <h3>Technology</h3>
            <div className="tag-list">
              {(project.technologies || ['React', 'JavaScript', 'Node.js']).map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="project-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Live Demo <ArrowUpRight size={16} />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <GitBranch size={16} /> GitHub
            </a>
          )}
        </div>

        {nextProject && (
          <div className="project-next">
            <h3>Next Project</h3>
            <Link to={`/portfolio/${nextProject.slug}`} className="inline-link">
              {nextProject.title} <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

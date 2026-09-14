import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  if (!project) return null

  return (
    <article className="project-card">
      <div className="project-card__media">
        <div className="project-card__placeholder">
          <span>{project.category || 'Project'}</span>
        </div>
      </div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category || 'Development'}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {(project.technologies || []).slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-card__actions">
          {project.slug && (
            <Link to={`/portfolio/${project.slug}`} className="inline-link">
              View Case Study <ArrowUpRight size={16} />
            </Link>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-link muted-link">
              Live Demo <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

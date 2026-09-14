import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import SkillBadge from '../components/SkillBadge'
import { skillGroups } from '../data/skills'
import { contact, getWhatsAppUrl } from '../config/contact'

export default function About() {
  return (
    <div className="page-shell section-space">
      <div className="container narrow-container">
        <SectionHeading eyebrow="About" title="Building digital experiences with clarity and purpose." description="I’m a Full Stack Developer focused on building modern digital experiences that are fast, responsive and easy to use." />

        <motion.div className="story-card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }}>
          <div>
            <h3>My Story</h3>
            <p>
              I&apos;m a Full Stack Developer with 4.7+ years of experience building modern,
              responsive web products across business, product, and workflow use cases. My focus is
              on clean interfaces, reliable implementation, and digital experiences that support real
              business goals.
            </p>
            <p>
              I work across frontend and backend stacks, with a strong emphasis on clear design,
              maintainable architecture, and practical performance improvements. I currently work as a
              Full Stack Developer at HCL.
            </p>
          </div>
        </motion.div>

        <div className="content-stack">
          <div className="mini-panel">
            <h3>Experience</h3>
            <p><strong>Full Stack Developer</strong> at HCL</p>
            <p>4.7+ years experience building modern web solutions and business-focused interfaces.</p>
          </div>

          <div className="mini-panel">
            <h3>Development Philosophy</h3>
            <p>
              Thoughtful interfaces, scalable frontend architecture, and a product-first mindset.
              I believe good websites should feel polished, load quickly, and be easy for users to
              trust and engage with.
            </p>
          </div>
        </div>

        <div className="skills-section">
          {skillGroups.map((group) => (
            <div key={group.title} className="skills-panel">
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <SkillBadge key={skill}>{skill}</SkillBadge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mini-panel">
          <h3>What I Bring</h3>
          <ul className="check-list">
            <li>Responsive UI design and implementation</li>
            <li>Modern React and JavaScript component architecture</li>
            <li>Business-aware product thinking</li>
            <li>Performance-first frontend delivery</li>
            <li>Clear communication and practical execution</li>
          </ul>
        </div>

        <div className="cta-inline">
          <Link to="/contact" className="inline-link">
            Let&apos;s talk <ArrowRight size={16} />
          </Link>
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Start a Project
          </a>
        </div>
      </div>
    </div>
  )
}

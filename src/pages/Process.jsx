import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'

const processSteps = [
  { number: '01', title: 'Discover', description: 'Understand goals, audience, pain points and the current digital landscape.' },
  { number: '02', title: 'Plan', description: 'Define the structure, scope, technical approach and business priorities.' },
  { number: '03', title: 'Design', description: 'Create a modern, user-friendly design that supports clarity and conversion.' },
  { number: '04', title: 'Develop', description: 'Build responsive interfaces and functional features with clean implementation.' },
  { number: '05', title: 'Launch', description: 'Deploy, validate and support a polished release with room for iteration.' },
]

export default function Process() {
  return (
    <div className="page-shell section-space">
      <div className="container">
        <SectionHeading eyebrow="Process" title="A straightforward workflow that keeps momentum high." description="From planning to launch, every step is focused on clarity, performance and practicality." align="center" />

        <div className="process-grid process-grid--page">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="process-card process-card--page"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
            >
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="cta-inline centered">
          <Link to="/contact" className="inline-link">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

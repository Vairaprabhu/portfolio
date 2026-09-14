import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <div className="page-shell section-space">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Web solutions designed for real business needs."
          description="I build polished, high-converting digital products across business sites, custom apps and redesign work."
          align="center"
        />

        <div className="services-grid services-grid--page">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="cta-inline centered">
          <Link to="/contact" className="inline-link">
            Discuss your project <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

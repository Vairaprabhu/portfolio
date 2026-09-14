import { ArrowRight, Check } from 'lucide-react'

export default function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card__icon-wrap">
        <span className={`service-icon service-icon--${service.accent}`}><ArrowRight size={18} /></span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul>
        {service.bullets.slice(0, 5).map((item) => (
          <li key={item}><Check size={14} /> {item}</li>
        ))}
      </ul>
    </article>
  )
}

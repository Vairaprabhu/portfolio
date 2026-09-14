import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { contact, emailHref, getWhatsAppUrl, phoneHref } from '../config/contact'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  return (
    <div className="page-shell section-space">
      <div className="container contact-layout">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let&apos;s build something useful."
            description="Have a website idea, redesign requirement or custom web application in mind? Let&apos;s discuss it."
          />
        </div>

        <div className="contact-card">
          <div className="contact-head">
            <h3>{contact.name}</h3>
            <p>{contact.title}</p>
          </div>

          <div className="contact-list">
            <a href={emailHref} className="contact-item">
              <Mail size={18} />
              <span>{contact.email}</span>
            </a>
            <a href={phoneHref} className="contact-item">
              <Phone size={18} />
              <span>{contact.phone}</span>
            </a>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="contact-item">
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
            <div className="contact-item muted-item">
              <MapPin size={18} />
              <span>India</span>
            </div>
          </div>

          <div className="contact-actions">
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              WhatsApp
            </a>
            <a href={emailHref} className="btn btn-outline">
              Email
            </a>
            <a href={contact.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

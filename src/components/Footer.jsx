import { GitBranch, Globe, Mail, Phone, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { contact, emailHref, getWhatsAppUrl, phoneHref } from '../config/contact'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
  { to: '/resume', label: 'Resume' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand brand-footer">VAIRAPRABHU</div>
          <p className="footer-title">{contact.title}</p>
          <p className="footer-tagline">Building digital experiences that move businesses forward.</p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul className="footer-links">
            {navLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-links contact-links">
            <li>
              <a href={emailHref}><Mail size={16} /> {contact.email}</a>
            </li>
            <li>
              <a href={phoneHref}><Phone size={16} /> {contact.phone}</a>
            </li>
            <li>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} /> WhatsApp</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Social</h3>
          <ul className="footer-links social-links">
            <li>
              <a href={contact.linkedin || '#'} target="_blank" rel="noopener noreferrer"><Globe size={16} /> LinkedIn</a>
            </li>
            <li>
              <a href={contact.github || '#'} target="_blank" rel="noopener noreferrer"><GitBranch size={16} /> GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} Vairaprabhu. All rights reserved.</span>
      </div>
    </footer>
  )
}

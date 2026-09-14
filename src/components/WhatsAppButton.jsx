import { MessageCircleMore } from 'lucide-react'
import { getWhatsAppUrl } from '../config/contact'

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Let's discuss your project on WhatsApp"
      className="whatsapp-float"
      title="Let's discuss your project"
    >
      <MessageCircleMore size={24} />
    </a>
  )
}

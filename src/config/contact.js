export const contact = {
  name: 'Vairaprabhu',
  title: 'Full Stack Developer',
  email: 'svairaprabhu@gmail.com',
  phone: '7708843354',
  whatsapp: '917708843354',
  linkedin: 'https://www.linkedin.com/in/vairaprabhu',
  github: 'https://github.com/vairaprabhu',
}

export const defaultWhatsAppMessage =
  'Hi Vairaprabhu, I came across your portfolio and would like to discuss a website project.'

export const getWhatsAppUrl = (message = defaultWhatsAppMessage) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`

export const emailHref = `mailto:${contact.email}`
export const phoneHref = `tel:+${contact.phone}`

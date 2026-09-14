import { motion } from 'framer-motion'
import { ArrowRight, Check, Code2, Layers3, MonitorSmartphone, Rocket, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import FAQItem from '../components/FAQItem'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import { faqItems } from '../data/faq'
import { services } from '../data/services'
import { contact, getWhatsAppUrl } from '../config/contact'

const trustPoints = [
  { label: '4.7+ Years Experience', value: '4.7+' },
  { label: 'React & Node.js', value: 'React' },
  { label: 'Mobile First', value: 'Mobile' },
  { label: 'Performance Focused', value: 'Fast' },
]

const whyWork = [
  'Direct Developer Communication',
  'Business-Focused',
  'Responsive by Default',
  'Modern Technology',
  'Performance Minded',
  'Long-Term Support',
]

const projectExpectations = [
  'Clear Communication',
  'Transparent Pricing',
  'Progress Updates',
  'Professional Delivery',
]

export default function Home() {
  return (
    <>
      <section className="hero-section layout-shell">
        <div className="container hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-copy"
          >
            <span className="eyebrow">Available for freelance projects</span>
            <h1>
              Hi, I&apos;m Vairaprabhu.
              <span>Building digital experiences that move businesses forward.</span>
            </h1>
            <p>
              I build modern, responsive websites and web applications for businesses,
              startups and professionals using React, JavaScript, Node.js and modern web
              technologies.
            </p>
            <div className="hero-actions">
              <Button href={getWhatsAppUrl()} external>
                Start a Project
              </Button>
              <Button href="/portfolio" variant="secondary">
                View My Work
              </Button>
            </div>
            <div className="hero-trust">
              {trustPoints.map((item) => (
                <span key={item.label}>{item.value}<small>{item.label}</small></span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="hero-visual"
          >
            <div className="browser-window">
              <div className="browser-bar">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-content">
                <div className="sidebar-panel">
                  <div className="mini-card active">Dashboard</div>
                  <div className="mini-card">Projects</div>
                  <div className="mini-card">Analytics</div>
                </div>
                <div className="main-panel">
                  <div className="stat-row">
                    <div className="stat-box large"><strong>4.7+</strong><span>Years</span></div>
                    <div className="stat-box"><strong>React</strong><span>UI</span></div>
                  </div>
                  <div className="chart-bars">
                    <span style={{ height: '36%' }} />
                    <span style={{ height: '52%' }} />
                    <span style={{ height: '64%' }} />
                    <span style={{ height: '82%' }} />
                    <span style={{ height: '100%' }} />
                  </div>
                  <div className="metrics-row">
                    <div className="metric-card">
                      <Code2 size={18} />
                      <span>Frontend</span>
                    </div>
                    <div className="metric-card">
                      <MonitorSmartphone size={18} />
                      <span>Responsive</span>
                    </div>
                    <div className="metric-card">
                      <Rocket size={18} />
                      <span>Launch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="experience-strip">
        <div className="container strip-grid">
          {[['4.7+', 'Years Experience'], ['React', 'Frontend'], ['Node.js', 'Backend'], ['Responsive', 'Mobile First'], ['Performance', 'Focused']].map(([value, label]) => (
            <div key={label} className="strip-item">
              <span>{value}</span>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </section>

      <section className="about-preview section-space">
        <div className="container split-grid">
          <div>
            <SectionHeading
              eyebrow="About"
              title="More than code. I build for business."
              description="I&apos;m a Full Stack Developer focused on building modern digital experiences that are fast, responsive and easy to use."
            />
            <ul className="highlight-list">
              <li>4.7+ years experience</li>
              <li>React</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>REST APIs</li>
              <li>Responsive UI</li>
              <li>Performance</li>
            </ul>
            <Link to="/about" className="inline-link">
              About Me <ArrowRight size={16} />
            </Link>
          </div>
          <div className="feature-panel">
            <div className="feature-card">
              <span className="mini-label">Current</span>
              <h3>Full Stack Developer at HCL</h3>
              <p>Building dependable web experiences with business-minded execution.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeading
            eyebrow="Services"
            title="Digital products built to perform."
            description="From small business websites to custom interfaces, I create modern experiences that feel premium and work reliably."
            align="center"
          />
          <div className="services-grid">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space muted-section">
        <div className="container">
          <SectionHeading
            eyebrow="Selected Work"
            title="My portfolio is intentionally empty right now."
            description="New projects will appear here as they are added."
            align="center"
          />
          <div className="empty-work-box">
            <div className="work-illustration">
              <div className="w-window">
                <div className="w-bar" />
                <div className="w-body" />
              </div>
            </div>
            <h3>New work coming soon.</h3>
            <p>Have a project you&apos;d like to see here?</p>
            <Button href={getWhatsAppUrl()} external>Start a Project</Button>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="Why Work With Me" title="Practical execution. Clear communication." align="center" />
          <div className="why-grid">
            {whyWork.map((item, index) => (
              <motion.div
                key={item}
                className="why-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
              >
                <div className="why-icon"><ShieldCheck size={18} /></div>
                <h3>{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space before-after">
        <div className="container">
          <SectionHeading
            eyebrow="Concept"
            title="Example concept — not a client project."
            description="A before/after example of what a clearer digital presence can feel like."
          />
          <div className="comparison-grid">
            <div className="comparison-card">
              <h3>Before</h3>
              <ul>
                <li>Outdated website</li>
                <li>Poor mobile layout</li>
                <li>Weak CTA</li>
                <li>Difficult navigation</li>
              </ul>
            </div>
            <div className="comparison-card accent-card">
              <h3>After</h3>
              <ul>
                <li>Modern layout</li>
                <li>Mobile-first design</li>
                <li>Clear CTA</li>
                <li>Better structure</li>
                <li>Better visual hierarchy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space muted-section">
        <div className="container">
          <SectionHeading eyebrow="Process" title="A clear path from idea to launch." align="center" />
          <div className="process-grid">
            {[
              ['01', 'Discover', 'Understand goals, audience and current blockers.'],
              ['02', 'Plan', 'Map requirements, structure and the right technical path.'],
              ['03', 'Design', 'Shape the UX, visual direction and conversion flow.'],
              ['04', 'Develop', 'Build responsive interfaces and business-ready functionality.'],
              ['05', 'Launch', 'Deploy, test and support a smooth release.'],
            ].map(([number, title, description], index) => (
              <motion.div
                key={title}
                className="process-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.28, delay: index * 0.05 }}
              >
                <span className="process-number">{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pricing-section">
        <div className="container">
          <SectionHeading eyebrow="Pricing" title="Transparent starting points." align="center" />
          <div className="pricing-grid">
            <div className="pricing-card">
              <span className="tier">Starter</span>
              <h3>₹9,999+</h3>
              <ul>
                <li>Responsive business website</li>
                <li>Core pages</li>
                <li>WhatsApp integration</li>
                <li>Mobile optimization</li>
              </ul>
              <Button href={getWhatsAppUrl()} external>Start a Project</Button>
            </div>
            <div className="pricing-card featured">
              <span className="tier">Standard</span>
              <h3>₹15,000+</h3>
              <ul>
                <li>Professional responsive website</li>
                <li>Home, About, Services, Contact</li>
                <li>WhatsApp, Call, Google Maps</li>
                <li>Basic SEO and deployment</li>
              </ul>
              <Button href={getWhatsAppUrl()} external>Start a Project</Button>
            </div>
            <div className="pricing-card">
              <span className="tier">Custom</span>
              <h3>Let&apos;s Discuss</h3>
              <ul>
                <li>Custom web applications</li>
                <li>Advanced functionality</li>
                <li>API integration</li>
                <li>Database and admin dashboards</li>
              </ul>
              <Button href={getWhatsAppUrl()} external>Start a Project</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space muted-section">
        <div className="container">
          <SectionHeading eyebrow="Working with me" title="Clear, honest and professional delivery." align="center" />
          <div className="expect-grid">
            {projectExpectations.map((item) => (
              <div key={item} className="expect-card">
                <Check size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space faq-section">
        <div className="container faq-layout">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions people often ask."
            description="Straight answers before we get started."
          />
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <FAQItem key={item.question} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space cta-section">
        <div className="container cta-panel">
          <div>
            <span className="eyebrow">Have a project in mind?</span>
            <h2>Let&apos;s turn your idea into a modern digital experience.</h2>
          </div>
          <div className="cta-actions">
            <Button href={getWhatsAppUrl()} external>Start a Project</Button>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

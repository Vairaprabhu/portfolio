import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import ProjectDetails from './pages/ProjectDetails'
import Process from './pages/Process'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'
import { routeMeta } from './config/site'

function SEO() {
  const location = useLocation()

  useEffect(() => {
    const meta = routeMeta[location.pathname] || routeMeta['/']
    document.title = meta.title

    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    const setProperty = (name, content) => {
      let tag = document.querySelector(`meta[property="${name}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('property', name)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', content)
    }

    setMeta('description', meta.description)
    setMeta('robots', 'index, follow')
    setProperty('og:title', meta.title)
    setProperty('og:description', meta.description)
    setProperty('og:type', 'website')
    setProperty('og:url', `https://www.vairaprabhu.dev${location.pathname}`)
    setProperty('twitter:card', 'summary_large_image')
    setProperty('twitter:title', meta.title)
    setProperty('twitter:description', meta.description)

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', `https://www.vairaprabhu.dev${location.pathname}`)
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical)
    }
  }, [location.pathname])

  return null
}

function AppRoutes() {
  const location = useLocation()

  return (
    <>
      <SEO />
      <ScrollToTop />
      <Navbar />
      <main className="site-main">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

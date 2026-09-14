import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page-shell section-space">
      <div className="container narrow-container center-text">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <Link to="/" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </div>
  )
}

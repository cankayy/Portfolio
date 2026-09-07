import { Link, useLocation } from 'react-router-dom'
import '../pages/HomePage.css'

const LinkedInArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
)

/**
 * Persistent left identity + nav shared by the landing and about pages.
 * Rendered once (outside the page-fade), so switching routes doesn't
 * remount or flash the navbar.
 */
export default function SiteNav() {
  const { pathname } = useLocation()
  const isAbout = pathname === '/about'

  return (
    <div className="landing-identity">
      <div className="landing-identity-top">
        <div className="landing-brand">
          <span className="landing-name">Cannon Hurst</span>
          <span className="landing-role">Product Designer</span>
        </div>
        <div className="landing-chips">
          <span className="chip">Currently @ Nuts &amp; Bolts AI</span>
          <span className="chip">3 years of exp</span>
          <a
            className="chip chip-link"
            href="https://www.linkedin.com/in/cannonhurst/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <LinkedInArrow />
          </a>
        </div>
      </div>

      <nav className="landing-nav" aria-label="Sections">
        <Link
          to="/"
          className={`landing-nav-item${!isAbout ? ' landing-nav-item--active' : ''}`}
          aria-current={!isAbout ? 'page' : undefined}
        >
          Case studies
        </Link>
        <Link
          to="/about"
          className={`landing-nav-item${isAbout ? ' landing-nav-item--active' : ''}`}
          aria-current={isAbout ? 'page' : undefined}
        >
          About me
        </Link>
        <a
          href="/cannon-hurst-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="landing-nav-item"
        >
          Resume
        </a>
      </nav>
    </div>
  )
}

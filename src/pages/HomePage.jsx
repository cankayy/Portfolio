import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

import './HomePage.css'

const LinkedInArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
)

export default function HomePage() {
  const [active, setActive] = useState(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const i = Math.round(el.scrollTop / el.clientHeight)
      setActive(Math.max(0, Math.min(projects.length - 1, i)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="landing">
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
            className="landing-nav-item landing-nav-item--active"
            aria-current="page"
            onClick={() => scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Case studies
          </Link>
          <Link to="/about" className="landing-nav-item">About me</Link>
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

      <div className="landing-scroll" ref={scrollRef}>
        {projects.map((p) => {
          const Photo = p.link ? Link : 'div'
          const photoProps = p.link
            ? { to: p.link, className: 'landing-photo landing-photo--link' }
            : { className: 'landing-photo' }
          return (
            <section className="landing-panel" key={p.id} aria-label={p.name}>
              <div className="landing-panel-spacer" aria-hidden />
              <Photo {...photoProps}>
                <img src={p.image} alt={p.name} className="landing-photo-img" />
                {p.link && (
                  <span className="landing-photo-arrow" aria-hidden>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                )}
              </Photo>
              <div className="landing-meta">
                <div className="landing-meta-head">
                  <span className="landing-meta-number">{p.number}</span>
                  <span className="landing-meta-name">{p.name}</span>
                </div>
                <div className="landing-chips landing-meta-chips">
                  {p.tags.map((tag, i) => (
                    <span className="chip" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <div className="landing-indicator" aria-hidden>
        <div className="landing-indicator-track">
          <div
            className="landing-indicator-thumb"
            style={{
              height: `${100 / projects.length}%`,
              transform: `translateY(${active * 100}%)`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

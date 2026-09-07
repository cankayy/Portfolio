import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

import './HomePage.css'

const THUMB = 16 // scroll-indicator thumb height, % of track
const ROTATE_MS = 7000 // auto-rotate interval
const WHEEL_LOCK_MS = 850

const LinkedInArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
)

const desktopQuery = '(min-width: 901px) and (hover: hover) and (pointer: fine)'

export default function HomePage() {
  const n = projects.length
  const [active, setActive] = useState(0)
  const [hovering, setHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(desktopQuery).matches
  )

  const cursorRef = useRef(null)
  const wheelLock = useRef(false)

  // Track whether the interactive (desktop, hover-capable) experience applies
  useEffect(() => {
    const mq = window.matchMedia(desktopQuery)
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Auto-rotate slowly. Re-scheduling on `active` also resets the timer
  // whenever the user advances manually.
  useEffect(() => {
    if (!isDesktop) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => setActive((a) => (a + 1) % n), ROTATE_MS)
    return () => clearTimeout(t)
  }, [active, isDesktop, n])

  // Wheel advances between projects (as a fade), throttled to one step per gesture.
  useEffect(() => {
    if (!isDesktop) return
    const onWheel = (e) => {
      e.preventDefault()
      if (wheelLock.current) return
      if (Math.abs(e.deltaY) < 4) return
      wheelLock.current = true
      const dir = e.deltaY > 0 ? 1 : -1
      setActive((a) => (a + dir + n) % n)
      window.setTimeout(() => {
        wheelLock.current = false
      }, WHEEL_LOCK_MS)
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [isDesktop, n])

  // Smooth, slightly-lagging custom cursor.
  useEffect(() => {
    if (!isDesktop) return
    let raf
    const cur = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const tgt = { ...cur }
    const onMove = (e) => {
      tgt.x = e.clientX
      tgt.y = e.clientY
    }
    const loop = () => {
      cur.x += (tgt.x - cur.x) * 0.16
      cur.y += (tgt.y - cur.y) * 0.16
      const el = cursorRef.current
      if (el) {
        el.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [isDesktop])

  // Drop the hover state if we leave desktop mode
  useEffect(() => {
    if (!isDesktop) setHovering(false)
  }, [isDesktop])

  return (
    <div className={`landing${isDesktop ? ' landing--interactive' : ''}`}>
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
            onClick={() => setActive(0)}
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

      <div className="landing-stage">
        {projects.map((p, i) => {
          const isActive = i === active
          const Tag = p.link ? Link : 'div'
          const tagProps = p.link
            ? {
                to: p.link,
                className: `landing-photo landing-photo--link`,
                onMouseEnter: () => setHovering(true),
                onMouseLeave: () => setHovering(false),
                tabIndex: isActive ? 0 : -1,
              }
            : { className: 'landing-photo' }
          return (
            <section
              key={p.id}
              className={`landing-panel${isActive ? ' landing-panel--active' : ''}`}
              aria-hidden={isDesktop && !isActive}
            >
              <div className="landing-panel-spacer" aria-hidden />
              <Tag {...tagProps}>
                <img src={p.image} alt={p.name} className="landing-photo-img" />
              </Tag>
              <div className="landing-meta">
                <div className="landing-meta-head">
                  <span className="landing-meta-number">{p.number}</span>
                  <span className="landing-meta-name">{p.name}</span>
                </div>
                <div className="landing-chips landing-meta-chips">
                  {p.tags.map((tag, k) => (
                    <span className="chip" key={k}>{tag}</span>
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
              height: `${THUMB}%`,
              top: `${(active / (n - 1)) * (100 - THUMB)}%`,
            }}
          />
        </div>
      </div>

      {isDesktop && (
        <div
          ref={cursorRef}
          className={`landing-cursor${hovering ? ' landing-cursor--view' : ''}`}
          aria-hidden
        >
          <span className="landing-cursor-label">View</span>
        </div>
      )}
    </div>
  )
}

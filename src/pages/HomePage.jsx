import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
// The custom cursor is provided app-wide by <Cursor/>; this page just marks
// interactive elements with data-cursor.

import './HomePage.css'

const THUMB = 16 // scroll-indicator thumb height, % of track
const ROTATE_MS = 7000 // auto-rotate interval
const WHEEL_LOCK_MS = 850

const desktopQuery = '(min-width: 901px) and (hover: hover) and (pointer: fine)'

export default function HomePage() {
  const n = projects.length
  const [active, setActive] = useState(0)
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(desktopQuery).matches
  )

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

  return (
    <div className={`landing${isDesktop ? ' landing--interactive' : ''}`}>
      <div className="landing-stage">
        {projects.map((p, i) => {
          const isActive = i === active
          const Tag = p.link ? Link : 'div'
          const tagProps = p.link
            ? {
                to: p.link,
                className: `landing-photo landing-photo--link`,
                'data-cursor': 'View',
                tabIndex: isActive ? 0 : -1,
              }
            : {
                className: 'landing-photo',
                'data-cursor': 'Coming soon',
              }
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
    </div>
  )
}

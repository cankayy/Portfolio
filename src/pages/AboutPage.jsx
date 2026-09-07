import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../pages/HomePage.css'
import './AboutPage.css'

const UpRightArrow = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
)

const backgroundParagraphs = [
  'I got into product design through an unlikely path: an English degree at the University of Washington. Studying literature taught me that everything tells a story, including how a product is built and who it seems to be for. A friend’s accessibility project made that concrete, and I chased the problem space on my own: Human-Centered Design courses, Design for America, a great mentor.',
  'That led to two years at Hugsi, then a Product Designer role at a new venture launched by a former advisor. About three years total, all in startups, so I’m used to moving fast and wearing multiple hats.',
  'Lately I’ve focused on designing for AI products, and I’m finishing a Master’s in Information Management (UX + AI) at the UW iSchool to keep growing in that space.',
  'I want work where design matters and there’s still room to figure things out.',
]

export default function AboutPage() {
  const [prog, setProg] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProg(max > 0 ? el.scrollTop / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="aboutx">
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
              LinkedIn <UpRightArrow />
            </a>
          </div>
        </div>

        <nav className="landing-nav" aria-label="Sections">
          <Link to="/" className="landing-nav-item">Case studies</Link>
          <Link to="/about" className="landing-nav-item landing-nav-item--active" aria-current="page">
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

      <div className="aboutx-body">
        <div className="aboutx-images aboutx-images--bg">
          <img src="/about/portrait.png" alt="Cannon Hurst beneath cherry blossoms at the University of Washington" />
          <img src="/about/landscape-water.png" alt="Sunset over Puget Sound" />
          <img src="/about/landscape-mountain.png" alt="A rocky mountain ridgeline" />
        </div>
        <div className="aboutx-text aboutx-text--bg">
          <div className="aboutx-label">
            <span className="aboutx-label-index">00</span>
            <span className="aboutx-label-name">BACKGROUND</span>
          </div>
          <h2 className="aboutx-heading">How I went from 0 to 1</h2>
          {backgroundParagraphs.map((text, i) => (
            <p key={i} className="aboutx-paragraph">{text}</p>
          ))}
        </div>

        <div className="aboutx-images aboutx-images--hob">
          <img src="/about/hobby-music.png" alt="A music production session in a DAW" />
          <img src="/about/hobby-travel.png" alt="A suspension bridge over a reservoir" />
          <img src="/about/hobby-food.png" alt="Fried rice, gyoza, and drinks at a restaurant" />
        </div>
        <div className="aboutx-text aboutx-text--hob">
          <div className="aboutx-label">
            <span className="aboutx-label-index">01</span>
            <span className="aboutx-label-name">HOBBIES</span>
          </div>
          <h2 className="aboutx-heading">What my 5-9 looks like</h2>
          <p className="aboutx-paragraph">
            Outside of work, I’m usually making music, eating somewhere new, or planning the next
            trip. Music has been a constant for me, there’s something about the process of building a
            track from nothing that scratches the same itch as design. Travel keeps me curious and
            honestly makes me a better designer, nothing resets your assumptions about how people
            live and what they need faster than being somewhere unfamiliar. And good food is just
            good food. I take it seriously.
          </p>
        </div>
      </div>

      <div className="landing-indicator landing-indicator--live" aria-hidden>
        <div className="landing-indicator-track">
          <div
            className="landing-indicator-thumb"
            style={{ height: '16%', top: `${prog * (100 - 16)}%` }}
          />
        </div>
      </div>
    </div>
  )
}

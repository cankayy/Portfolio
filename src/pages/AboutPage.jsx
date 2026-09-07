import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './AboutPage.css'

const UpRightArrow = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
)

const backgroundParagraphs = [
  'My path to product design started somewhere unexpected: an English degree at the University of Washington. Studying literature taught me that everything tells a story, and that idea followed me into design. The way a product is built signals to certain users whether or not it was made for them, and once I saw that, I couldn’t unsee it.',
  'A friend’s project on accessible mobile design was what made it concrete. Seeing how poor design could alienate users and tell the wrong story made me realize this was the problem space I wanted to work in. From there, I pursued it on my own initiative, taking Human-Centered Design courses outside my major, getting involved with Design for America, and finding a mentor who helped me navigate my first real projects.',
  'Those experiences led to an internship at Hugsi, a startup where I spent two years growing as a designer. That role eventually led to my next one, when a company advisor launched a new venture and brought me on as a Product Designer. All in, I have about three years of experience, all within startups, so I’m comfortable in environments where things move fast and you’re constantly wearing multiple hats.',
  'Lately, my focus has been on designing for AI products. It’s an area I’ve spent the last few years working in and one I want to keep growing in as the industry evolves. I’m also currently completing a Master’s in Information Management with a specialization in UX and AI at the UW iSchool, which keeps pushing my thinking in that space.',
  'I’m drawn to work where design actually matters and where there’s still room to figure things out. That’s the kind of environment where I do my best work.',
]

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">
      <Link to="/" className="about-back">
        <span className="about-back-arrow" aria-hidden>←</span>
        <span>Cannon Hurst</span>
      </Link>

      <div className="about-frame">
        <header className="about-header">
          <h1 className="about-title">About Me</h1>
          <div className="about-chips">
            <span className="chip">Currently @ Nuts &amp; Bolts AI</span>
            <span className="chip">3 years of exp</span>
            <a className="chip chip-link" href="https://www.linkedin.com/in/cannonhurst/" target="_blank" rel="noopener noreferrer">
              LinkedIn <UpRightArrow />
            </a>
            <a className="chip chip-link" href="mailto:cannonmckay@gmail.com">
              Contact me <UpRightArrow />
            </a>
          </div>
        </header>

        <div className="about-divider" />

        <div className="about-gallery">
          <div className="about-gallery-main">
            <img src="/about/portrait.png" alt="Cannon Hurst standing beneath cherry blossoms at the University of Washington" />
          </div>
          <div className="about-gallery-side">
            <img src="/about/landscape-water.png" alt="Sunset over Puget Sound" />
            <img src="/about/landscape-mountain.png" alt="A rocky mountain ridgeline" />
          </div>
        </div>

        <div className="about-divider" />

        <section className="about-section">
          <div className="about-section-label">
            <span className="about-section-index">00</span>
            <span className="about-section-name">BACKGROUND</span>
          </div>
          <div className="about-section-body">
            <h2 className="about-section-heading">How I went from 0 to 1</h2>
            {backgroundParagraphs.map((text, i) => (
              <p key={i} className="about-paragraph">{text}</p>
            ))}
          </div>
        </section>

        <div className="about-divider" />

        <section className="about-section about-section--hobbies">
          <div className="about-section-label">
            <span className="about-section-index">01</span>
            <span className="about-section-name">HOBBIES</span>
          </div>
          <div className="about-section-body">
            <h2 className="about-section-heading">What my 5-9 looks like</h2>
            <p className="about-paragraph">
              Outside of work, I’m usually making music, eating somewhere new, or planning the
              next trip. Music has been a constant for me, there’s something about the process of
              building a track from nothing that scratches the same itch as design. Travel keeps me
              curious and honestly makes me a better designer, nothing resets your assumptions about
              how people live and what they need faster than being somewhere unfamiliar. And good
              food is just good food. I take it seriously.
            </p>
          </div>
        </section>

        <div className="about-hobby-gallery">
          <img src="/about/hobby-music.png" alt="A music production session in a DAW" />
          <img src="/about/hobby-travel.png" alt="A suspension bridge over a reservoir" />
          <img src="/about/hobby-food.png" alt="Fried rice, gyoza, and drinks at a restaurant" />
        </div>
      </div>
    </div>
  )
}

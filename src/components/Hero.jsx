import './Hero.css'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-brand">
        <span className="hero-name">Cannon Hurst</span>
      </div>
      <h1 className="hero-headline">
        Product designer crafting intuitive experiences for AI products
      </h1>
      <div className="hero-chips">
        <span className="chip">Currently @ Nuts & Bolts AI</span>
        <span className="chip">3 years of exp</span>
        <a
          href="https://www.linkedin.com/in/cannonhurst/"
          target="_blank"
          rel="noopener noreferrer"
          className="chip chip-link"
        >
          LinkedIn
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
    </header>
  )
}

import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import './Sidebar.css'

const navItems = [
  { label: 'Case studies', path: '/', link: true },
  { label: 'About me', path: '/#about', link: false },
]

export default function Sidebar() {
  const location = useLocation()
  const pathname = location.pathname
  const hash = location.hash || ''
  const [aboutInView, setAboutInView] = useState(false)

  useEffect(() => {
    if (pathname !== '/') {
      setAboutInView(false)
      return
    }
    const aboutEl = document.getElementById('about')
    if (!aboutEl) return
    const observer = new IntersectionObserver(
      ([entry]) => setAboutInView(entry.isIntersecting),
      { rootMargin: '0px 0px -50% 0px', threshold: 0 }
    )
    observer.observe(aboutEl)
    return () => observer.disconnect()
  }, [pathname])

  const isActive = (item) => {
    if (item.path === '/') return (pathname === '/' && !hash && !aboutInView) || pathname.startsWith('/project/')
    if (item.path === '/#about') return pathname === '/' && (hash === '#about' || aboutInView)
    return false
  }

  return (
    <aside className="sidebar" aria-label="Main navigation">
      <Link to="/" className="sidebar-logo" aria-label="Portfolio home">
        <img src="/logo.png" alt="" />
      </Link>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => {
            const active = isActive(item)
            return (
              <li key={item.label}>
                {item.link ? (
                  <Link
                    to={item.path}
                    className={active ? 'active' : ''}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.path}
                    className={active ? 'active' : ''}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

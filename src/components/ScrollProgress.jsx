import { useEffect, useState } from 'react'

const THUMB = 16 // thumb height, % of track

/**
 * Live scroll-progress indicator that tracks the window scroll position.
 * Used on pages that scroll normally (about, project pages).
 */
export default function ScrollProgress() {
  const [prog, setProg] = useState(0)

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
    <div className="landing-indicator landing-indicator--live" aria-hidden>
      <div className="landing-indicator-track">
        <div
          className="landing-indicator-thumb"
          style={{ height: `${THUMB}%`, top: `${prog * (100 - THUMB)}%` }}
        />
      </div>
    </div>
  )
}

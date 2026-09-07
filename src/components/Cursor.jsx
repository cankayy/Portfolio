import { useEffect, useRef, useState } from 'react'

const desktopQuery = '(min-width: 901px) and (hover: hover) and (pointer: fine)'

/**
 * App-wide custom cursor: a black dot that trails the pointer on every page.
 * Grows into a labeled circle when hovering any element that carries a
 * `data-cursor="..."` attribute (e.g. project previews on the landing).
 */
export default function Cursor() {
  const [on, setOn] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(desktopQuery).matches
  )
  const [label, setLabel] = useState(null)
  const ref = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia(desktopQuery)
    const update = () => setOn(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!on) return
    document.documentElement.classList.add('cursor-none')

    let raf
    const cur = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const tgt = { ...cur }

    const onMove = (e) => {
      tgt.x = e.clientX
      tgt.y = e.clientY
    }
    const onOver = (e) => {
      const el = e.target.closest ? e.target.closest('[data-cursor]') : null
      setLabel(el ? el.getAttribute('data-cursor') : null)
    }
    const loop = () => {
      cur.x += (tgt.x - cur.x) * 0.08
      cur.y += (tgt.y - cur.y) * 0.08
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cur.x}px, ${cur.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('cursor-none')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      setLabel(null)
    }
  }, [on])

  if (!on) return null

  return (
    <div ref={ref} className={`app-cursor${label ? ' app-cursor--active' : ''}`} aria-hidden>
      <span className="app-cursor-label">{label}</span>
    </div>
  )
}

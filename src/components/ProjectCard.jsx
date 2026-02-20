import './ProjectCard.css'

export default function ProjectCard({ id, title, description, image, placeholder, link }) {
  const Wrapper = link ? 'a' : 'div'
  const cardClass = `project-card${link ? ' project-card-link' : ''}${id ? ` project-card--${id}` : ''}`
  const wrapperProps = link ? { href: link, className: cardClass } : { className: cardClass }

  return (
    <Wrapper {...wrapperProps}>
      <span className="project-card-arrow" aria-hidden>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </span>
      <div className="project-card-image-wrap">
        {image ? (
          <img src={image} alt="" className="project-card-image" />
        ) : (
          <div className={`project-card-placeholder project-card-placeholder--${placeholder}`}>
            {placeholder === 'coming-soon' && <span className="project-card-coming-soon">Coming soon</span>}
          </div>
        )}
      </div>
      <div className="project-card-text-overlay">
        <h3 className="project-card-title">{title}</h3>
        {description && <p className="project-card-description">{description}</p>}
      </div>
    </Wrapper>
  )
}

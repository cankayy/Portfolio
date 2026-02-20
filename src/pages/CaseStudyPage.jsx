import { useState, useEffect, Fragment } from 'react'
import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import './CaseStudyPage.css'

export default function CaseStudyPage() {
  const { id } = useParams()
  const project = caseStudies[id]
  const deliverablesSection = project?.sections?.find((s) => s.type === 'deliverables')
  const firstDeliverablesTabId = deliverablesSection?.tabs?.[0]?.id ?? 'dashboard'
  const [deliverablesTab, setDeliverablesTab] = useState(firstDeliverablesTabId)

  useEffect(() => {
    setDeliverablesTab(firstDeliverablesTabId)
  }, [id, firstDeliverablesTabId])

  if (!project) {
    return (
      <div className="case-study case-study--missing">
        <p>Project not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  const { title, headline, tagline, role, company, liveUrl, heroImagePlaceholder, heroImage, heroBentoGrid, heroBentoTopLeft, heroBentoTopRight, heroBentoBottomLeft, heroBentoBottomRight, sections, testimonial } = project

  return (
    <div className="case-study-page">
      <Link to="/" className="case-study-back">
        <span className="case-study-back-arrow" aria-hidden>←</span>
        <span className="case-study-back-name">Cannon Hurst</span>
      </Link>
      <article className={`case-study${heroBentoGrid ? ' case-study--has-process-vertical' : ''}${id === 'hugsi' ? ' case-study--hugsi' : ''}`}>
      <header className="case-study-hero">
        <h1 className="case-study-title">
          {Array.isArray(headline) ? headline.map((line, i) => (
            <span key={i}>{line}{i < headline.length - 1 && <br />}</span>
          )) : headline}
        </h1>
        <p className="case-study-tagline">
          {Array.isArray(tagline) ? tagline.map((line, k) => (
            <span key={k}>{line}{k < tagline.length - 1 && <br />}</span>
          )) : tagline}
        </p>
        <dl className="case-study-meta">
          <div>
            <dt>Role</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>Company</dt>
            <dd>{company}</dd>
          </div>
          {liveUrl && (
            <div className="case-study-meta__live">
              <dt>LIVE SITE</dt>
              <dd>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  {title}
                  <span className="case-study-meta__live-arrow" aria-hidden>↗</span>
                </a>
              </dd>
            </div>
          )}
        </dl>
      </header>

      {heroBentoGrid && (
        <>
          <div className="case-study-hero-bento" aria-hidden>
            <div className="case-study-hero-bento__row">
              <div className="case-study-hero-bento__cell">
                {heroBentoTopLeft && (
                  <img src={heroBentoTopLeft} alt="" className="case-study-hero-bento__cell-img" />
                )}
              </div>
              <div className="case-study-hero-bento__cell">
                {heroBentoTopRight && (
                  <img src={heroBentoTopRight} alt="" className="case-study-hero-bento__cell-img" />
                )}
              </div>
            </div>
            <div className="case-study-hero-bento__row case-study-hero-bento__row--swapped">
              <div className="case-study-hero-bento__cell">
                {heroBentoBottomLeft && (
                  <img src={heroBentoBottomLeft} alt="" className="case-study-hero-bento__cell-img" />
                )}
              </div>
              <div className="case-study-hero-bento__cell">
                {heroBentoBottomRight && (
                  <img src={heroBentoBottomRight} alt="" className="case-study-hero-bento__cell-img" />
                )}
              </div>
            </div>
          </div>
          <div className="case-study-dotted-line-horizontal" aria-hidden />
        </>
      )}
      {!heroBentoGrid && (heroImage ? (
        <>
          <div className="case-study-hero-image case-study-hero-image--with-line">
            <img src={heroImage} alt="" className="case-study-hero-img" />
          </div>
          <div className="case-study-dotted-line-horizontal" aria-hidden />
        </>
      ) : heroImagePlaceholder && (
        <div className="case-study-hero-image">
          <div className="case-study-placeholder case-study-placeholder--hero" aria-hidden />
        </div>
      ))}

      {sections.map((section, i) => {
        if (section.type === 'problem') {
          const isOutcome = section.subtitle === 'The outcome'
          const isFirstProblem = !isOutcome
          return (
            <section key={i} className={`case-study-section case-study-section--problem${isOutcome ? ' case-study-section--outcome' : ''}${isFirstProblem ? ' case-study-section--problem-first' : ''}`}>
              <p className="case-study-section-subtitle">{section.subtitle}</p>
              <h2 className="case-study-section-heading case-study-section-heading--centered">
                {Array.isArray(section.heading) ? section.heading.map((line, k) => (
                  <span key={k}>{line}{k < section.heading.length - 1 && <br />}</span>
                )) : section.heading}
              </h2>
              <p className="case-study-section-intro">{section.intro}</p>
              {section.problemImage ? (
                <div className="case-study-problem-image-wrap">
                  <img src={section.problemImage} alt="" className="case-study-problem-image" />
                </div>
              ) : (
                <div className="case-study-problem-grid">
                  {(section.points || []).map((point, j) => (
                    <div key={j} className="case-study-problem-card">
                      <h3 className="case-study-problem-card-heading">{point.heading}</h3>
                      <p className="case-study-problem-card-body">{point.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )
        }
        if (section.type === 'deliverables') {
          const rawContent = section.tabContent?.[deliverablesTab] ?? section.tabContent?.dashboard ?? ''
          const activeContent = Array.isArray(rawContent) ? rawContent : [rawContent]
          return (
            <section key={i} className="case-study-section case-study-section--deliverables">
              <div className="case-study-deliverables-header">
                <h2 className="case-study-section-heading case-study-deliverables-heading">{section.heading}</h2>
                <div className="case-study-deliverables-tabs-wrap">
                  <p className="case-study-deliverables-callout" aria-hidden>
                    <span className="case-study-deliverables-callout-text">Click through to see all designs</span>
                    <svg className="case-study-deliverables-callout-arrow" viewBox="0 0 64 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 3" aria-hidden>
                      <path d="M 0 12 Q 32 12, 56 12" />
                      <path d="M 50 8 L 56 12 L 50 16" strokeDasharray="none" />
                    </svg>
                  </p>
                  <div className="case-study-deliverables-tabs" role="tablist" aria-label="Deliverables">
                {(section.tabs || []).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={deliverablesTab === tab.id}
                    aria-controls={`deliverables-panel-${tab.id}`}
                    id={`deliverables-tab-${tab.id}`}
                    className={`case-study-deliverables-tab${deliverablesTab === tab.id ? ' case-study-deliverables-tab--active' : ''}`}
                    onClick={() => setDeliverablesTab(tab.id)}
                  >
                    <span className="case-study-deliverables-tab-label">{tab.label}</span>
                  </button>
                ))}
                  </div>
                </div>
              </div>
              <div
                id={`deliverables-panel-${deliverablesTab}`}
                role="tabpanel"
                aria-labelledby={`deliverables-tab-${deliverablesTab}`}
                className="case-study-deliverables-panel"
              >
                <div className="case-study-deliverables-panel-left">
                  {activeContent.map((paragraph, k) => (
                    <p key={k} className="case-study-section-body">{paragraph}</p>
                  ))}
                </div>
                <div className="case-study-deliverables-panel-right">
                  {section.tabImages?.[deliverablesTab] ? (
                    <img src={section.tabImages[deliverablesTab]} alt="" className="case-study-deliverables-image" />
                  ) : (
                    <div className="case-study-placeholder case-study-placeholder--process case-study-placeholder--deliverables" aria-hidden />
                  )}
                </div>
              </div>
            </section>
          )
        }
        if (section.type === 'process') {
          const isFirstProcessWithVertical = heroBentoGrid && sections.findIndex(s => s.type === 'process') === i
          const processContent = (
            <section key={i} className={`case-study-section case-study-section--process${isFirstProcessWithVertical ? ' case-study-section--process-with-line' : ''}`}>
              <div className="case-study-process-left">
                <h2 className="case-study-section-heading">
                  {Array.isArray(section.heading) ? section.heading.map((line, k) => (
                    <span key={k}>{line}{k < section.heading.length - 1 && <br />}</span>
                  )) : section.heading}
                </h2>
                <p className="case-study-section-body">{section.body}</p>
              </div>
              <div className="case-study-process-images">
                {(section.imageCaptions || []).map((caption, j) => (
                  <figure key={j} className="case-study-process-figure">
                    {section.imageUrls?.[j] ? (
                      <img src={section.imageUrls[j]} alt="" className="case-study-process-image" />
                    ) : (
                      <div className="case-study-placeholder case-study-placeholder--process" aria-hidden />
                    )}
                    <figcaption className="case-study-process-caption">{caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )
          if (heroBentoGrid) {
            return (
              <div key={i} className="case-study-process-with-vertical">
                <div className="case-study-dotted-line-horizontal case-study-dotted-line-horizontal--after-problem" aria-hidden />
                {processContent}
                <div className="case-study-dotted-line-vertical" aria-hidden />
              </div>
            )
          }
          return (
            <Fragment key={i}>
              {processContent}
              <div className="case-study-dotted-line-horizontal case-study-dotted-line-horizontal--after-process" aria-hidden />
            </Fragment>
          )
        }
        return (
          <section key={i} className="case-study-section">
            <h2 className="case-study-section-heading">
                {Array.isArray(section.heading) ? section.heading.map((line, k) => (
                  <span key={k}>{line}{k < section.heading.length - 1 && <br />}</span>
                )) : section.heading}
              </h2>
            <p className="case-study-section-body">{section.body}</p>
          </section>
        )
      })}

      {testimonial && (
        <section className="case-study-section case-study-testimonial">
          <h2 className="case-study-section-heading">What users are saying</h2>
          <blockquote className="case-study-quote">{testimonial}</blockquote>
        </section>
      )}

      <section className="case-study-cta">
        <h2 className="case-study-cta-heading">Let's work together</h2>
        <p className="case-study-cta-text">Have a product or idea you’d like to design? Get in touch.</p>
        <div className="case-study-cta-actions">
          <a href="https://www.linkedin.com/in/cannonhurst/" target="_blank" rel="noopener noreferrer" className="case-study-cta-button">
            Connect on LinkedIn
          </a>
        </div>
      </section>
      </article>
    </div>
  )
}

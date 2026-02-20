import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import AboutSection from '../components/AboutSection'
import { projects } from '../data/projects'

import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <Hero />
      </div>
      <section className="projects" aria-label="Case studies">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
      <div className="about-section-wrap">
        <AboutSection />
      </div>
    </div>
  )
}

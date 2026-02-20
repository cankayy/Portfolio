import './AboutSection.css'

const experience = [
  { company: 'Nuts & Bolts AI – Cheerful AI Team', role: 'Product Designer', dates: 'Aug 2025 – Present' },
  { company: 'Hugsi', role: 'Product Designer', dates: 'Dec 2022 – Jan 2025' },
  { company: 'Electric Potential', role: 'UX Designer', dates: 'Dec 2023 – May 2024' },
]

const education = {
  school: 'University of Washington',
  degrees: [
    { name: 'M.S. in Human-Computer Interaction (HCI)', dates: '2025 – 2027' },
    { name: 'B.S. in English (Creative Writing)', dates: '2021 – 2023' },
  ],
}

const tools = ['Figma', 'Adobe Suite', 'Webflow', 'Cursor', 'Claude', 'Rhino 3D']

const skills = [
  'User Research',
  'Product Thinking',
  'User Testing',
  'Prototyping',
  'Design Systems',
  'Accessibility Design',
  'Responsive Design',
  'HTML/CSS',
]

export default function AboutSection() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <h2 id="about-heading" className="about-heading">About me</h2>
      <div className="about-content">
        <div className="about-column about-column--left">
          <div className="about-block">
            <h3 className="about-block-heading">Experience</h3>
            <ul className="about-list about-list--experience">
              {experience.map((item, i) => (
                <li key={i} className="about-experience-item">
                  <span className="about-experience-company">{item.company}</span>
                  <span className="about-experience-role">{item.role}</span>
                  <span className="about-experience-dates">{item.dates}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="about-block">
            <h3 className="about-block-heading">Education</h3>
            <div className="about-education">
              <span className="about-education-school">{education.school}</span>
              {education.degrees.map((deg, i) => (
                <div key={i} className="about-education-degree">
                  <span className="about-education-name">{deg.name}</span>
                  <span className="about-education-dates">{deg.dates}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-column about-column--right">
          <div className="about-block">
            <h3 className="about-block-heading about-block-heading--caps">Tools</h3>
            <ul className="about-list">
              {tools.map((tool, i) => (
                <li key={i} className="about-list-item">{tool}</li>
              ))}
            </ul>
          </div>
          <div className="about-block">
            <h3 className="about-block-heading about-block-heading--caps">Skills</h3>
            <ul className="about-list">
              {skills.map((skill, i) => (
                <li key={i} className="about-list-item">{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

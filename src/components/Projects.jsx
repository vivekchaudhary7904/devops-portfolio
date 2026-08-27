import './projects.css'

// NOTE: these are placeholder/example projects — replace with your real
// repos, descriptions, and links as you build them.
const PROJECTS = [
  {
    name: 'Cloud Portfolio',
    description:
      'A responsive personal portfolio deployed as a static website on Amazon S3 to gain hands-on experience with AWS cloud hosting.',
    tech: ['React', 'Vite', 'JavaScript', 'AWS S3'],
    github: 'https://github.com/vivekchaudhary7904',
    demo: '#',
  },
  {
    name: 'Dockerized Application',
    description: 'A web application containerized using Docker for a consistent, portable runtime environment.',
    tech: ['Docker', 'Linux', 'Git'],
    github: 'https://github.com/vivekchaudhary7904',
    demo: null,
  },
  {
    name: 'Kubernetes Deployment',
    description: 'A containerized application deployed and managed using Kubernetes.',
    tech: ['Kubernetes', 'Docker', 'Linux'],
    github: 'https://github.com/vivekchaudhary7904',
    demo: null,
  },
  {
    name: 'CI/CD Pipeline',
    description: 'An automated build-and-deploy pipeline that ships changes without manual steps.',
    tech: ['Jenkins', 'GitHub', 'Docker'],
    github: 'https://github.com/vivekchaudhary7904',
    demo: null,
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__bar">
        <span className="project-card__dot" />
        <span className="project-card__dot" />
        <span className="project-card__dot" />
        <span className="project-card__filename">{project.name.toLowerCase().replace(/\s+/g, '-')}.md</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">projects</p>
        <h2 className="section-title">Things I've built (or am building)</h2>
        <p className="section-lede">
          Example projects for now — placeholders I'll swap for real repos as I finish them. Each
          one exists to build a specific, practical skill.
        </p>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard project={p} key={p.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

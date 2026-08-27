import './about.css'

const FOCUS_AREAS = ['Linux', 'Cloud', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code', 'AWS']

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div>
          <p className="eyebrow">about</p>
          <h2 className="section-title">Learning infrastructure by building it</h2>
          <p className="about__text">
            I'm a 3rd-year B.Tech CSE (AI/ML) student, currently focused on becoming a DevOps
            engineer. My day-to-day work is building practical, hands-on skills in Linux, cloud
            infrastructure, containers, CI/CD, and Infrastructure as Code — not just reading
            about them.
          </p>
          <p className="about__text">
            I'd rather ship a small, working project on real infrastructure than memorize theory
            without touching a terminal. This portfolio itself is one of those projects: a static
            site built to be deployed on Amazon S3.
          </p>
        </div>

        <aside className="about__card">
          <p className="about__card-label">focus.yaml</p>
          <ul className="about__list">
            {FOCUS_AREAS.map((item) => (
              <li key={item}>
                <span className="about__list-marker">-</span> {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

export default About

import './skills.css'

const SKILL_GROUPS = [
  { file: 'cloud.yaml', items: ['AWS', 'EC2', 'S3', 'IAM', 'VPC'] },
  { file: 'devops.yaml', items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CI/CD'] },
  { file: 'programming.yaml', items: ['Python', 'Java', 'JavaScript'] },
  { file: 'tools.yaml', items: ['Git', 'GitHub', 'Linux', 'Bash'] },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <p className="eyebrow">skills</p>
        <h2 className="section-title">What I work with</h2>
        <p className="section-lede">
          Grouped the way I'd organize them in a real project — not ranked by percentage, just
          what I use and am building with.
        </p>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-card" key={group.file}>
              <p className="skill-card__file">{group.file}</p>
              <div className="skill-card__badges">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

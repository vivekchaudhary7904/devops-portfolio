import './journey.css'

const STEPS = [
  { stage: 'Linux', note: 'Switched from Windows to real Linux — not just WSL.' },
  { stage: 'Git & GitHub', note: 'Version control and collaboration basics.' },
  { stage: 'Docker', note: 'Packaging applications into containers.' },
  { stage: 'Kubernetes', note: 'Orchestrating containers at scale.' },
  { stage: 'Jenkins', note: 'Automating build and deploy steps.' },
  { stage: 'Terraform', note: 'Provisioning infrastructure as code.' },
  { stage: 'AWS', note: 'Hosting and managing cloud infrastructure.' },
  { stage: 'Cloud & DevOps Projects', note: 'Applying all of it to real, working projects.' },
]

function LearningJourney() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <p className="eyebrow">journey</p>
        <h2 className="section-title">The pipeline so far</h2>
        <p className="section-lede">
          Each stage had to pass before the next one started — same as any real deployment
          pipeline.
        </p>

        <ol className="pipeline">
          {STEPS.map((step, i) => (
            <li className="pipeline__stage" key={step.stage}>
              <div className="pipeline__marker">
                <span className="pipeline__index">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="pipeline__content">
                <h3 className="pipeline__stage-name">{step.stage}</h3>
                <p className="pipeline__stage-note">{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default LearningJourney

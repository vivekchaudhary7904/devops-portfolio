import './github.css'

function GitHubSection() {
  return (
    <section id="github" className="section github-section">
      <div className="container github-section__inner">
        <div>
          <p className="eyebrow">open source</p>
          <h2 className="section-title">Follow the commits, not just the highlights</h2>
          <p className="section-lede">
            Every project, experiment, and half-finished script lives on GitHub — that's where the
            real, unpolished learning happens.
          </p>
        </div>
        <a
          href="https://github.com/vivekchaudhary7904"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary github-section__btn"
        >
          View GitHub
        </a>
      </div>
    </section>
  )
}

export default GitHubSection

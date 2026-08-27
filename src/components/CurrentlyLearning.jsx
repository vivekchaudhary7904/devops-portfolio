import './currently-learning.css'

const CURRENT_FOCUS = ['AWS', 'Terraform', 'Kubernetes', 'CI/CD', 'Cloud Infrastructure', 'DevOps Projects']

function CurrentlyLearning() {
  return (
    <section className="section currently-learning">
      <div className="container">
        <p className="eyebrow">status: in progress</p>
        <h2 className="section-title">Currently learning</h2>
        <p className="section-lede">Not mastered — actively in progress right now.</p>

        <ul className="currently-learning__grid">
          {CURRENT_FOCUS.map((item) => (
            <li key={item} className="currently-learning__item">
              <span className="currently-learning__dot" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CurrentlyLearning

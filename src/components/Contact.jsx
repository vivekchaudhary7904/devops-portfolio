import './contact.css'

const CONTACT_LINKS = [
  { label: 'Email', value: 'vivekchaudhary7904@gmail.com', href: 'mailto:vivekchaudhary7904@gmail.com' },
  { label: 'GitHub', value: 'github.com/vivekchaudhary7904', href: 'https://github.com/vivekchaudhary7904' },
  { label: 'LinkedIn', value: 'linkedin.com/in/vivek-chaudhary-b63473357', href: 'https://www.linkedin.com/in/vivek-chaudhary-b63473357/' },
]

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="eyebrow">contact</p>
        <h2 className="section-title">Let's talk</h2>
        <p className="section-lede">
          This site is hosted as a static site on S3, so there's no backend contact form here —
          reach out directly through any of these instead.
        </p>

        <div className="contact__grid">
          {CONTACT_LINKS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact__card"
            >
              <span className="contact__label">{c.label}</span>
              <span className="contact__value">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

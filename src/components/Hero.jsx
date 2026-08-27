import { useEffect, useRef, useState } from 'react'
import './hero.css'

const BOOT_LINES = [
  '[  OK  ] Mounted /home/vivek',
  '[  OK  ] Started linux-fundamentals.service',
  '[  OK  ] Started git-and-github.service',
  '[  OK  ] Started docker.service',
  '[  OK  ] Started kubernetes.service',
  '[  OK  ] Started terraform.service',
  '[  OK  ] Started aws-cloud.service',
  '[ WAIT ] Starting devops-career.service...',
]

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/vivekchaudhary7904',
    icon: (
      <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.27 7.77 10.77.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.16.69-3.83-1.34-3.83-1.34-.52-1.32-1.26-1.67-1.26-1.67-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.73 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.33-5.19 5.61.41.35.77 1.04.77 2.11 0 1.52-.01 2.75-.01 3.12 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vivek-chaudhary-b63473357/',
    icon: (
      <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:vivekchaudhary7904@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
        <path d="m3.5 6 8.5 6.5L20.5 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function BootTerminal() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [showPrompt, setShowPrompt] = useState(false)
  const timeouts = useRef([])

  useEffect(() => {
    BOOT_LINES.forEach((_, i) => {
      const t = setTimeout(() => setVisibleCount(i + 1), 220 * i)
      timeouts.current.push(t)
    })

    const promptTimer = setTimeout(
      () => setShowPrompt(true),
      220 * BOOT_LINES.length + 300
    )

    timeouts.current.push(promptTimer)

    return () => timeouts.current.forEach(clearTimeout)
  }, [])

  return (
    <div
      className="hero-terminal"
      role="img"
      aria-label="Terminal showing Vivek's role and current focus areas"
    >
      <div className="hero-terminal__bar">
        <span className="hero-terminal__dot hero-terminal__dot--red" />
        <span className="hero-terminal__dot hero-terminal__dot--yellow" />
        <span className="hero-terminal__dot hero-terminal__dot--green" />
        <span className="hero-terminal__title">vivek@devops-journey: ~</span>
      </div>

      <div className="hero-terminal__body">
        {BOOT_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="hero-terminal__line hero-terminal__boot-line">
            {line}
          </div>
        ))}

        {showPrompt && (
          <div className="hero-terminal__prompt-block">
            <div className="hero-terminal__line">
              <span className="hero-terminal__prompt">$</span> whoami
            </div>

            <div className="hero-terminal__line hero-terminal__out">
              vivek-chaudhary
            </div>

            <div className="hero-terminal__line">
              <span className="hero-terminal__prompt">$</span> role
            </div>

            <div className="hero-terminal__line hero-terminal__out">
              devops-engineer
            </div>

            <div className="hero-terminal__line">
              <span className="hero-terminal__prompt">$</span> current_focus
            </div>

            <div className="hero-terminal__line hero-terminal__out">
              aws <span className="hero-terminal__pipe">|</span> kubernetes{' '}
              <span className="hero-terminal__pipe">|</span> terraform{' '}
              <span className="hero-terminal__pipe">|</span> ci-cd
            </div>

            <div className="hero-terminal__line">
              <span className="hero-terminal__prompt">$</span>
              <span className="hero-terminal__cursor" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">available for internships &amp; junior roles</p>

          <h1 className="hero__title">
            Vivek Chaudhary
            <span className="hero__title-role">DevOps Engineer</span>
          </h1>

          <p className="hero__intro">
            I build, automate, and deploy applications while working with
            DevOps, cloud infrastructure, containers, CI/CD, and automation.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>

            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <ul className="hero__socials" aria-label="Social links">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <BootTerminal />
        </div>
      </div>
    </section>
  )
}

export default Hero

import { useEffect, useState } from 'react'
import './navbar.css'

function Navbar({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id)
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__logo" aria-label="Vivek Chaudhary, back to top">
          <span className="navbar__logo-bracket">~/</span>vivek
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`navbar__link ${activeId === s.id ? 'navbar__link--active' : ''}`}
              aria-current={activeId === s.id ? 'true' : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary navbar__cta">
          Contact
        </a>

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}
        aria-label="Mobile"
        aria-hidden={!isOpen}
      >
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={handleLinkClick}>
            {s.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navbar

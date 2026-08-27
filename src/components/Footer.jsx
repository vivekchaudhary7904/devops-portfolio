import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Vivek Chaudhary</p>
          <p className="footer__tagline">Building • Learning • Automating</p>
        </div>

        <ul className="footer__links">
          <li>
            <a href="https://github.com/vivekchaudhary7904" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vivek-chaudhary-b63473357/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:vivekchaudhary7904@gmail.com">Email</a>
          </li>
        </ul>
      </div>
      <p className="footer__copyright">
        © {new Date().getFullYear()} Vivek Chaudhary. Built with React + Vite, deployed on Amazon S3.
      </p>
    </footer>
  )
}

export default Footer

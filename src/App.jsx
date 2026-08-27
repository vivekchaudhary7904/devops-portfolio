import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import LearningJourney from './components/LearningJourney.jsx'
import CurrentlyLearning from './components/CurrentlyLearning.jsx'
import GitHubSection from './components/GitHub.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  return (
    <>
      <Navbar sections={SECTIONS} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningJourney />
        <CurrentlyLearning />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

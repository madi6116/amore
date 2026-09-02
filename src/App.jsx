import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Services from './components/Services'
import About from './components/About'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="site">
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <About />
      <Experience />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
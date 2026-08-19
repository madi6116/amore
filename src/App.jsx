import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import Services from './components/Services'
import About from './components/About'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import ThemeSwitcher from './components/ThemeSwitcher'
import './App.css'

function App() {
  // 'ivory'  = off-white background, blue accents
  // 'blue'   = blue background, off-white accents
  const [theme, setTheme] = useState('ivory')

  return (
    <div className="site" data-theme={theme}>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
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

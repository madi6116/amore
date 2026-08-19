import logo from '../assets/logo.jpg'

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#top">
        <img src={logo} alt="Amore Wedding & Specialty Events logo" />
      </a>

      <nav className="navbar__links" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Booking isn't connected yet — wire this up to your booking flow when it's ready */}
      <button type="button" className="btn btn--primary navbar__cta">
        Book Now
      </button>
    </header>
  )
}

export default Navbar

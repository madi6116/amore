import tablescape from '../assets/tablescape.jpg'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__image">
        <img src={tablescape} alt="Elegant reception table styled with blue hydrangeas and candlelight" />
        <div className="hero__scrim" />
      </div>

      <div className="hero__content">
        <p className="eyebrow">Amore Wedding &amp; Specialty Events</p>
        <h1>
          Your Vision. <em>Our Passion.</em>
        </h1>
        <p className="hero__subtitle">An Unforgettable Celebration.</p>

        {/* Booking isn't connected yet — wire this up to your booking flow when it's ready */}
        <button type="button" className="btn btn--primary">
          Book Now
        </button>
      </div>
    </section>
  )
}

export default Hero

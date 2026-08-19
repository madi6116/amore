function Footer() {
  return (
    <footer className="footer" id="contact">
      <p className="footer__brand">Amore Wedding &amp; Specialty Events</p>

      <div className="footer__contact">
        <a href="tel:+17073282447">(707) 328-2447</a>
        <span className="footer__divider" aria-hidden="true">
          &middot;
        </span>
        <a href="mailto:Eventplanners1015@gmail.com">Eventplanners1015@gmail.com</a>
      </div>

      {/* Replace # with real profile URLs when you have them */}
      <div className="footer__social" aria-label="Social media">
        <a href="#" aria-label="Facebook">
          Facebook
        </a>
        <a href="#" aria-label="Instagram">
          Instagram
        </a>
        <a href="#" aria-label="Pinterest">
          Pinterest
        </a>
      </div>

      {/* Booking isn't connected yet — wire this up to your booking flow when it's ready */}
      <button type="button" className="btn btn--primary">
        Book Now
      </button>

      <p className="footer__fine-print">
        &copy; {new Date().getFullYear()} Amore Wedding &amp; Specialty Events. Lynn &amp; Stewart Dalie.
      </p>
    </footer>
  )
}

export default Footer

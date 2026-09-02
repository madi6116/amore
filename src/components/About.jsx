import owners from '../assets/owners.jpg'

function About() {
  return (
    <section className="about" id="about">
      <p className="eyebrow">Our Story</p>
      <h2>Romantic luxury. Thoughtful planning. Timeless celebrations.</h2>
      <p className="about__intro">
        Amore creates weddings and specialty events that feel personal, polished, and
        beautifully effortless. Every celebration begins with listening — learning the
        couple's vision, priorities, traditions, and story — then shaping those ideas
        into a cohesive experience filled with meaningful detail.
      </p>

      <h3 className="about__subhead">Meet the Owners</h3>

      <div className="owners">
        <div className="owners__photo">
          <img src={owners} alt="Lynn and Stewart Dalie, owners of Amore Wedding & Specialty Events" />
        </div>

        <div className="owners__bios">
          <div className="owner-card">
            <h4>Lynn Dalie</h4>
            <p className="owner-card__role">
              Owner &middot; Creative Director &middot; Event Planner &middot; Licensed Officiant
            </p>
            <p>
              Lynn leads Amore's creative vision and planning experience. As a licensed
              officiant, she can also help couples create and lead a ceremony that feels
              personal and meaningful. With an eye for romantic detail and modern-classic
              elegance, her approach is warm, attentive, and grounded in making every
              client feel heard and genuinely cared for.
            </p>
          </div>

          <div className="owner-card">
            <h4>Stewart Dalie</h4>
            <p className="owner-card__role">
              Owner &middot; Operations &amp; Logistics &middot; Creative Assistant &middot; Travel Consultant
            </p>
            <p>
              Stewart brings a steady, thoughtful presence to Amore. He guides operations
              and logistics, supports the creative process, and assists clients with
              travel-related planning and coordination. His commitment to preparation,
              quality, and dependable service helps every celebration unfold with
              confidence and grace.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
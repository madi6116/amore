const pillars = [
  {
    title: 'Personal',
    description: 'A celebration shaped around your story — not a formula.',
  },
  {
    title: 'Polished',
    description: 'Thoughtful details brought together with intention and elegance.',
  },
  {
    title: 'Present',
    description: 'Steady guidance, attentive service, and genuine care throughout.',
  },
]

function Experience() {
  return (
    <section className="experience">
      <p className="eyebrow">The Amore Experience</p>
      <h2>Clear guidance. Creative collaboration. Calm coordination.</h2>
      <p className="experience__intro">
        Services may include full-service planning, partial planning, wedding
        management, event design and styling, vendor collaboration, timeline
        development, rehearsal direction, and event-day execution — each tailored to
        the couple and the celebration.
      </p>

      <div className="experience__grid">
        {pillars.map((pillar) => (
          <div className="pillar" key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>

      <blockquote className="experience__quote">
        &ldquo;If you can dream it, Amore Wedding &amp; Specialty Events makes the dream
        a reality.&rdquo;
      </blockquote>
    </section>
  )
}

export default Experience

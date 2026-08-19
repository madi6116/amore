const services = [
  {
    title: 'Wedding Planning',
    description:
      'Full-service wedding planning tailored to your style, culture, and vision. We handle every detail so you can cherish every moment.',
  },
  {
    title: 'Specialty Events',
    description:
      'From milestone celebrations to corporate soirées, we create bespoke events that inspire and delight your guests.',
  },
  {
    title: 'Travel Consultation',
    description:
      'Dreaming of a destination wedding or event? We offer expert guidance to make your travel experience seamless and unforgettable.',
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <p className="eyebrow">What We Offer</p>
      <h2>Services</h2>

      <div className="services__grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

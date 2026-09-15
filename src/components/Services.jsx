import { useEffect, useState } from 'react'
import { client } from '../sanityclient'

function Services() {
  const [services, setServices] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "service"] | order(order asc){title, description}`)
      .then(setServices)
      .catch(console.error)
  }, [])

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
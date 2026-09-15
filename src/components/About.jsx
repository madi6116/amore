import { useEffect, useState } from 'react'
import { client, urlFor } from '../sanityclient'

function About() {
  const [owners, setOwners] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "owner"]{name, role, bio, photo}`)
      .then(setOwners)
      .catch(console.error)
  }, [])

  const photoOwner = owners.find((o) => o.photo)

  return (
    <section className="about" id="about">
      <p className="eyebrow">Our Story</p>
      <h2>Romantic luxury. Thoughtful planning. Timeless celebrations.</h2>
      <p className="about__intro">
        Amore creates weddings and specialty events that feel personal, polished, and
        beautifully effortless. Every celebration begins with listening and learning
        the couple's vision, priorities, traditions, and story, then shaping those
        ideas into a cohesive experience filled with meaningful&nbsp;detail.
      </p>

      <h3 className="about__subhead">Meet the Owners</h3>

      <div className="owners">
        {photoOwner && (
          <div className="owners__photo">
            <img
              src={urlFor(photoOwner.photo).width(800).url()}
              alt="Lynn and Stewart Dalie, owners of Amore Wedding & Specialty Events"
            />
          </div>
        )}

        <div className="owners__bios">
          {owners.map((owner) => (
            <div className="owner-card" key={owner.name}>
              <h4>{owner.name}</h4>
              <p className="owner-card__role">{owner.role}</p>
              <p>{owner.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
import { useEffect, useState } from 'react'
import { client } from '../sanityclient'

function Footer() {
  const [settings, setSettings] = useState(null)

  useEffect(() => {
    client
      .fetch(`*[_type == "siteSettings"][0]{phone, email, bookingUrl, facebookUrl, instagramUrl, pinterestUrl}`)
      .then(setSettings)
      .catch(console.error)
  }, [])

  return (
    <footer className="footer" id="contact">
      <p className="footer__brand">Amore Wedding &amp; Specialty Events</p>

      {settings && (
        <>
          <div className="footer__contact">
            <a href={`tel:${settings.phone}`}>{settings.phone}</a>
            <span className="footer__divider" aria-hidden="true">
              &middot;
            </span>
            <a href={`mailto:${settings.email}`}>{settings.email}</a>
          </div>

          <div className="footer__social" aria-label="Social media">
            {settings.facebookUrl && <a href={settings.facebookUrl}>Facebook</a>}
            {settings.instagramUrl && <a href={settings.instagramUrl}>Instagram</a>}
            {settings.pinterestUrl && <a href={settings.pinterestUrl}>Pinterest</a>}
          </div>

          {settings.bookingUrl && (
            <a
              href={settings.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Book Now
            </a>
          )}
        </>
      )}

      <p className="footer__fine-print">
        &copy; {new Date().getFullYear()} Amore Wedding &amp; Specialty Events. Lynn &amp; Stewart Dalie.
      </p>
    </footer>
  )
}

export default Footer
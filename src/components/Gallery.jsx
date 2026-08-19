import journal from '../assets/journal.jpg'
import arch from '../assets/arch.jpg'
import tablescape from '../assets/tablescape.jpg'

const images = [
  { src: tablescape, alt: 'Reception tablescape with blue hydrangeas and candlelight' },
  { src: arch, alt: 'Ceremony aisle with a floral arch of blue and white blooms' },
  { src: journal, alt: 'Planning journal styled with hydrangeas, ribbon, and fabric swatches' },
]

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <p className="eyebrow">A Glimpse</p>
      <h2>Gallery</h2>

      <div className="gallery__grid">
        {images.map((image) => (
          <div className="gallery__item" key={image.src}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery

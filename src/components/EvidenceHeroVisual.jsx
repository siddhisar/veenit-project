import gavelImg from '../assets/images/gavel.jpg'

// Electronic Evidence hero visual — a single framed gavel photograph
// inside the existing dark card (acts as the dark frame). Static image.
export default function EvidenceHeroVisual() {
  return (
    <div className="eh-visual eh-visual--photo" aria-hidden="true">
      <img src={gavelImg} alt="Legal gavel" className="eh-photo-img" />
      <span className="eh-photo-overlay" />
    </div>
  )
}

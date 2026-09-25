import divorceImg from '../assets/images/divorce.jpg'

// Divorce & Family Disputes hero visual — a single framed, theme-tinted
// photograph inside the existing dark card (acts as the dark frame).
export default function FamilyEvidenceVisual() {
  return (
    <div className="eh-visual eh-visual--photo dfd-photo" aria-hidden="true">
      <img src={divorceImg} alt="Family-law documentation" className="eh-photo-img" />
      <span className="eh-photo-overlay" />
    </div>
  )
}

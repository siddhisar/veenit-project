export default function ServiceCard({ title, items, delay, dir = '' }) {
  return (
    <div className={`service-card reveal ${dir} d${delay}`}>
      <h3 className="service-title">{title}</h3>
      <ul className="service-list">
        {items.map((item) => (
          <li key={item}>
            <i className="bi bi-check-circle-fill" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

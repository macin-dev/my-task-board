export default function Task({ icon, title, img }) {
  return (
    <div className="task-list__item">
      <span className="task-list__icon">{icon}</span>

      <h2 className="task-list__title">{title}</h2>

      <div className="task-list__state">
        <img src={img.src} alt={img.alt} />
      </div>
    </div>
  );
}

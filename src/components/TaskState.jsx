export default function TaskState({ img, setColor }) {
  return (
    <div className={`task-state ${setColor}`}>
      <img src={img.src} alt={img.alt} />
    </div>
  );
}

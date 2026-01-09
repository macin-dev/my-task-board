export default function FormButton({ text, img }) {
  return (
    <button type="button" className="modal-task__form-btn">
      {text}
      <img src={img.src} alt={img.alt} />
    </button>
  );
}

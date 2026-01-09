export default function IconInput({ id, value }) {
  return (
    <div className="modal-task__input-icon">
      <label htmlFor={id}>
        <input type="radio" name="icon" id={id} value={value} />
        {value}
      </label>
    </div>
  );
}

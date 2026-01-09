export default function StatusInput({ value }) {
  const idInput = value.toLowerCase().replace(/[' ]/g, "");

  return (
    <div className="modal-task__status-input">
      <label htmlFor={idInput}>
        <input type="radio" name="status" id={idInput} />
        {value}
      </label>
    </div>
  );
}

export default function IconInput({
  id,
  value,
  selectedOption,
  handleSelectedOption,
}) {
  function handleIcon(e) {
    const { id } = e.target;
    handleSelectedOption(id);
  }
  return (
    <div
      className={`modal-task__input-icon ${
        selectedOption === id ? "modal-task__input-icon--selected" : null
      }`}
    >
      <label htmlFor={id}>
        <input
          type="radio"
          name="icon"
          id={id}
          value={value}
          onChange={handleIcon}
        />
        {value}
      </label>
    </div>
  );
}

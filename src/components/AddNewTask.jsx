export default function AddNewTask({ handleToggleModal }) {
  return (
    <button type="button" className="add-button" onClick={handleToggleModal}>
      <span className="add-button__icon">
        <img src="/src/assets/Add_round_duotone.svg" alt="plus icon" />
      </span>

      <h2 className="add-button__title">Add new task</h2>
    </button>
  );
}

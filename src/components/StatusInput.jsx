import TaskState from "./TaskState";
import { taskStatesArr } from "../data/data";

export default function StatusInput({
  value,
  taskState,
  selectedStatus,
  handleSelectedStatus,
}) {
  const idInput = value.toLowerCase().replace(/[' ]/g, "");
  const { classNames, src, alt } = taskStatesArr[taskState];
  const highlightRadio =
    selectedStatus === idInput ? "modal-task__input-status--selected" : "";

  function handleStatus(e) {
    const { id } = e.target;
    handleSelectedStatus(id);
  }

  return (
    <div className={`modal-task__input-status ${highlightRadio}`}>
      <label htmlFor={idInput}>
        <input
          type="radio"
          name="status"
          id={idInput}
          value={idInput}
          onChange={handleStatus}
        />
        <TaskState img={{ src, alt }} setColor={classNames[1]} />
        {value}

        {selectedStatus === idInput && (
          <img src="/src/assets/check_circle.svg" alt="check circle icon" />
        )}
      </label>
    </div>
  );
}

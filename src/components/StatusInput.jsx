import TaskState from "./TaskState";
import { taskStatesArr } from "../data/data";

export default function StatusInput({ value, taskState }) {
  const idInput = value.toLowerCase().replace(/[' ]/g, "");
  const { classNames, src, alt } = taskStatesArr[taskState];

  return (
    <div className="modal-task__input-status">
      <label htmlFor={idInput}>
        <input type="radio" name="status" id={idInput} />
        <TaskState img={{ src, alt }} setColor={classNames[1]} />
        {value}
      </label>
    </div>
  );
}

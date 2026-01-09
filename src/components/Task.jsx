import TaskState from "./TaskState";
import { taskStatesArr } from "../data/data";

export default function Task({ icon, title, taskState, description }) {
  const getStateColor = taskStatesArr[taskState]?.classNames;

  return (
    <div className={`task-list__item ${getStateColor[0]}`}>
      <span
        className={`task-list__icon ${
          description ? "task-list__icon--align-start" : null
        }`}
      >
        {icon}
      </span>

      <div className="task-list__texts">
        <h2 className="task-list__title">{title}</h2>
        {description && <p className="task-list__description">{description}</p>}
      </div>

      {taskState != "uninitialized" && (
        <TaskState
          img={{
            src: taskStatesArr[taskState].src,
            alt: taskStatesArr[taskState].alt,
          }}
          setColor={getStateColor[1]}
        />
      )}
    </div>
  );
}

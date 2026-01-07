const taskStatesArr = {
  completed: {
    src: "/src/assets/Done_round_duotone.svg",
    alt: "done round icon",
    classNames: ["task-list__item--completed", "task-list__state--completed"],
  },
  progress: {
    src: "/src/assets/Time_atack_duotone.svg",
    alt: "time atack icon",
    classNames: ["task-list__item--progress", "task-list__state--progress"],
  },
  canceled: {
    src: "/src/assets/close_ring_duotone.svg",
    alt: "close ring icon",
    classNames: ["task-list__item--canceled", "task-list__state--canceled"],
  },
  uninitialized: {
    classNames: [
      "task-list__item--uninitialized",
      "task-list__state--uninitialized",
    ],
  },
};

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
        <div className={`task-list__state ${getStateColor[1]}`}>
          <img
            src={taskStatesArr[taskState]?.src}
            alt={taskStatesArr[taskState]?.alt}
          />
        </div>
      )}
    </div>
  );
}

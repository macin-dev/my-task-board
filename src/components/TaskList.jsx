import Task from "./Task";
import { defaultTasks } from "../data/data";

export default function TaskList() {
  const tasksElements = defaultTasks.map((task) => {
    return (
      <Task
        key={task.id}
        icon={task.icon}
        title={task.title}
        taskState={task.state}
        description={task.description}
      />
    );
  });

  return <section className="task-list">{tasksElements}</section>;
}

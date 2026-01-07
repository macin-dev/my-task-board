import Task from "./Task";

const defaultTasks = [
  {
    id: 1,
    title: "Task in Progress",
    state: "progress",
    icon: "⏰",
    description: "",
  },
  {
    id: 2,
    title: "Task Completed",
    state: "completed",
    icon: "🏋🏻‍♂️",
    description: "",
  },
  {
    id: 3,
    title: "Task Won't do",
    state: "canceled",
    icon: "☕️",
    description: "",
  },
  {
    id: 4,
    title: "Task to do",
    state: "uninitialized",
    icon: "📚",
    description: "Work on a Challenge on devChallenges.io, learn TypeScript.",
  },
];

export default function TaskList() {
  const tasksElements = defaultTasks.map((task) => {
    return (
      <Task
        icon={task.icon}
        title={task.title}
        taskState={task.state}
        description={task.description}
      />
    );
  });

  return <section className="task-list">{tasksElements}</section>;
}

import Task from "./Task";

export default function TaskList() {
  return (
    <section className="task-list">
      <Task
        icon="⏰"
        title="Task in Progress"
        img={{
          src: "/src/assets/Time_atack_duotone.svg",
          alt: "time duotone icon",
        }}
      />
    </section>
  );
}

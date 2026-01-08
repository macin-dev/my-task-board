import AddNewTask from "./components/AddNewTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  return (
    <section className="app-container">
      <Header />
      <TaskList />
      <AddNewTask />
    </section>
  );
}

export default App;

import { useState } from "react";
import AddNewTask from "./components/AddNewTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import ModalTask from "./components/ModalTask";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  function handleToggleModal() {
    setToggleModal((prevToggleModal) => !prevToggleModal);
  }

  return (
    <section className="app-container">
      <Header />
      <TaskList />
      <AddNewTask handleToggleModal={handleToggleModal} />

      {toggleModal && (
        <div className="modal">
          <ModalTask handleToggleModal={handleToggleModal} />
        </div>
      )}
    </section>
  );
}

export default App;

import IconInput from "./IconInput";
import StatusInput from "./StatusInput";
import FormButton from "./FormButton";
import { iconsData } from "../data/data";

export default function ModalTask({ handleToggleModal }) {
  const iconInputElements = iconsData.map((el) => {
    return <IconInput key={el.key} id={el.key} value={el.value} />;
  });

  return (
    <section className="modal-task">
      <div className="modal-task__header">
        <h2 className="modal-task__title">Task details</h2>
        <button
          type="button"
          className="modal-task__close-modal"
          onClick={handleToggleModal}
        >
          <img src="/src/assets/close_ring_duotone-1.svg" alt="close icon" />
        </button>
      </div>

      <main className="modal-task__body">
        <form className="modal-task__form">
          <div className="modal-task__text-group">
            <label className="modal-task__form-label" htmlFor="taskName">
              Task name
            </label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              placeholder="Walk the dog 🐶"
            />

            <label className="modal-task__form-label" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter a short description"
              name="description"
            ></textarea>
          </div>

          <div className="modal-task__icon-group">
            <h3 className="modal-task__subtitle">Icon</h3>
            <div className="modal-task__icons">{iconInputElements}</div>
          </div>

          <div className="modal-task__status-group">
            <h3 className="modal-task__subtitle">Status</h3>
            <div className="modal-task__status">
              <StatusInput value="In progress" taskState="progress" />
              <StatusInput value="Completed" taskState="completed" />
              <StatusInput value="Won't do" taskState="canceled" />
            </div>
          </div>

          <div className="modal-task__form-buttons">
            <FormButton
              text="Delete"
              img={{ src: "/src/assets/Trash.svg", alt: "trash icon" }}
            />
            <FormButton
              text="Save"
              img={{
                src: "/src/assets/Done_round.svg",
                alt: "Done round icon",
              }}
            />
          </div>
        </form>
      </main>
    </section>
  );
}

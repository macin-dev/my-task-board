import ModalForm from "./ModalForm";

export default function ModalTask({ handleToggleModal }) {
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
        <ModalForm />
      </main>
    </section>
  );
}

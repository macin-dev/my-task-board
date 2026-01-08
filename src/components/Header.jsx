export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <img
          className="header__logo"
          src="/src/assets/Logo.svg"
          alt="logo icon"
        />
        <h1 className="header__title">My Task Board</h1>

        <button type="button" className="header__button">
          <img src="/src/assets/Edit_duotone.svg" alt="pen icon" />
        </button>
      </nav>

      <span className="header__description">Tasks to keep organised</span>
    </header>
  );
}

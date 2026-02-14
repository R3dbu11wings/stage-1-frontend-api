import "./Navigation.css";

function Navigation({ onSignInClick }) {
  return (
    <nav className="navigation">
      <a href="/" className="navigation__link">
        Home
      </a>
      <button className="navigation__button" onClick={onSignInClick}>
        Sign In
      </button>
    </nav>
  );
}

export default Navigation;

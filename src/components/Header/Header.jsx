import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header({ onSignInClick }) {
  return (
    <header className="header">
      <h1 className="header__title">NewsExplorer</h1>
      <Navigation onSignInClick={onSignInClick} />
    </header>
  );
}

export default Header;

import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";

function Header({ currentUser, onSignInClick, onLogout, isDark }) {
  return (
    <header className={`header ${isDark ? "header_dark" : ""}`}>
      <h1 className={`header__title ${isDark ? "header__title_dark" : ""}`}>
        NewsExplorer
      </h1>
      <Navigation
        currentUser={currentUser}
        onSignInClick={onSignInClick}
        onLogout={onLogout}
        isDark={isDark}
      />
    </header>
  );
}

export default Header;

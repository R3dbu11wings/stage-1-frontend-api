import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";

function Navigation({ currentUser, onSignInClick, onLogout, isDark }) {
  return (
    <nav className="navigation">
      <a
        href="/"
        className={`navigation__link ${isDark ? "navigation__link_dark" : ""}`}
      >
        Home
      </a>
      {currentUser && (
        <a
          href="/saved-news"
          className={`navigation__link ${isDark ? "navigation__link_dark" : ""}`}
        >
          Saved Articles
        </a>
      )}
      {currentUser ? (
        <div
          className={`navigation__user ${isDark ? "navigation__user_dark" : ""}`}
        >
          <span
            className={`navigation__username ${isDark ? "navigation__username_dark" : ""}`}
          >
            {currentUser.username}
          </span>
          <button className="navigation__logout" onClick={onLogout}>
            <img
              src={logoutIcon}
              alt="Logout"
              className="navigation__logout-icon"
            />
          </button>
        </div>
      ) : (
        <button
          className={`navigation__button ${isDark ? "navigation__button_dark" : ""}`}
          onClick={onSignInClick}
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

export default Navigation;

import { useState } from "react";
import "./Navigation.css";
import logoutIcon from "../../assets/logout.svg";
import menuIcon from "../../assets/menu.svg";
import closeIcon from "../../assets/close.svg";

function Navigation({ currentUser, onSignInClick, onLogout, isDark }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <button className="navigation__menu-btn" onClick={toggleMobileMenu}>
        <img src={menuIcon} alt="Menu" className="navigation__menu-icon" />
      </button>

      <nav
        className={`navigation ${isMobileMenuOpen ? "navigation_open" : ""}`}
      >
        <div className="navigation__mobile-header">
          <h1 className="navigation__mobile-title">NewsExplorer</h1>
          <button className="navigation__close-btn" onClick={closeMobileMenu}>
            <img
              src={closeIcon}
              alt="Close"
              className="navigation__close-icon"
            />
          </button>
        </div>

        <div className="navigation__mobile-links">
          <a
            href="/"
            className={`navigation__link ${isDark ? "navigation__link_dark" : ""}`}
            onClick={closeMobileMenu}
          >
            Home
          </a>
          {currentUser && (
            <a
              href="/saved-news"
              className={`navigation__link ${isDark ? "navigation__link_dark" : ""}`}
              onClick={closeMobileMenu}
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
              onClick={() => {
                onSignInClick();
                closeMobileMenu();
              }}
            >
              Sign In
            </button>
          )}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="navigation__overlay" onClick={closeMobileMenu}></div>
      )}
    </>
  );
}

export default Navigation;

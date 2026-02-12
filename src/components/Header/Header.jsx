import "./Header.css"

function Header({ onSignInClick }) {
    return (
        <header className="header">
            <h1 className="header__title">NewsExplorer</h1>
            <div className="header__divider">
                <a href="/" className="header__link">Home</a>
                <button className="header__button" onClick={onSignInClick}>Sign In</button>
            </div>
        </header>
    );
}

export default Header;
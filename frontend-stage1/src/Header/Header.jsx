import "./Header.css"

function Header() {
    return (
        <header className="header">
            <h1 className="header__title">NewsExplorer</h1>
            <div className="header__divider">
            <p className="header__subtitle">Home</p>
            <button className="header__button">Sign In</button>
            </div>
        </header>
    );
}
export default Header;
import "./Footer.css";
import LinkedinIcon from "../../assets/linkedin.svg";
import GithubIcon from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2026 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <span className="footer__divider">
          <a href="/" className="footer__link">
            Home
          </a>
          <a
            href="https://tripleten.com"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </span>
        <a
          href="https://www.linkedin.com/in/zachary-tesch"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__image" src={LinkedinIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/R3dbu11wings"
          className="footer__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__image-git" src={GithubIcon} alt="GitHub" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;

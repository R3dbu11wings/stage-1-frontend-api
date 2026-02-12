import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>© 2024 Frontend Stage 1</p>
       <nav className="footer__nav">
        <span className="footer__divider">
        <a href="/" className="footer__link">Home</a>
        <a href="https://tripleten.com" className="footer__link" target="_blank" rel="noopener noreferrer">TripleTen</a>
        </span>
        <a href="https://www.linkedin.com/in/zachary-tesch" className="footer__link" target="_blank" rel="noopener noreferrer"><img className='footer__image' src="../../src/assets/linkedin.svg" alt="LinkedIn"/></a>
        <a href="https://github.com/R3dbu11wings" className="footer__link" target="_blank" rel="noopener noreferrer"><img className='footer__image-git' src="../../src/assets/github.svg" alt="GitHub"/></a>
      </nav>
    </footer>
  )
} 

export default Footer
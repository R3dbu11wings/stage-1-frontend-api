import './LoginModal.css';

function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>&times;</button>
        <h2 className="modal__title">Sign In</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          <label className="modal__label">
            Email
            <input 
              type="email" 
              className="modal__input" 
              required 
              placeholder="Enter your email"
            />
          </label>
          <label className="modal__label">
            Password
            <input 
              type="password" 
              className="modal__input" 
              required 
              placeholder="Enter your password"
            />
          </label>
          <button type="submit" className="modal__button">Sign In</button>
          <p className="modal__text">
            or
            <button 
              type="button" 
              className="modal__link" 
              onClick={onSwitchToRegister}
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
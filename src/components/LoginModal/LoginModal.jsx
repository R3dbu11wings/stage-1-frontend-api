import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const handleSubmit = (e) => {
    console.log("Login submitted");
    onClose();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign In"
      buttonText="Sign In"
      onSubmit={handleSubmit}
      bottomLinkText="Sign Up"
      onBottomLinkClick={onSwitchToRegister}
    >
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
    </ModalWithForm>
  );
}

export default LoginModal;

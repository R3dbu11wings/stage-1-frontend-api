import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";

function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const handleSubmit = (e) => {
    console.log("Registration submitted");
    onClose();
  };

  return (
    <ModalWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Sign Up"
      buttonText="Sign Up"
      onSubmit={handleSubmit}
      bottomLinkText="Sign In"
      onBottomLinkClick={onSwitchToLogin}
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
          placeholder="Enter a password"
        />
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          required
          placeholder="Enter your username"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;

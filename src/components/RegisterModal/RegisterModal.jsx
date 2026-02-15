import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { register } from "../../utils/auth.js";

function RegisterModal({
  isOpen,
  onClose,
  onSwitchToLogin,
  onRegisterSuccess,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("");
    register({ email, password, username })
      .then((user) => {
        onRegisterSuccess(user);
      })
      .catch((err) => {
        setError(err.message);
      });
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          required
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          className="modal__input"
          required
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      {error && <p className="modal__error">{error}</p>}
    </ModalWithForm>
  );
}

export default RegisterModal;

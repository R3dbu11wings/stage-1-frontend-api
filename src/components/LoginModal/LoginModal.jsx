import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { login } from "../../utils/auth.js";

function LoginModal({ isOpen, onClose, onSwitchToRegister, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    if (!value.includes("@")) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = () => {
    setError("");
    login({ email, password })
      .then((user) => {
        onLoginSuccess(user);
      })
      .catch((err) => {
        setError(err.message);
      });
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
      <label className={`modal__label ${error ? "modal__label_error" : ""}`}>
        Email
        <input
          type="text"
          className={`modal__input ${error ? "modal__input_error" : ""}`}
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />
        {emailError && <span className="modal__error">{emailError}</span>}
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          required
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;

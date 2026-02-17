import "./SuccessModal.css";
import CloseIcon from "../../assets/close.svg";

function SuccessModal({ isOpen, onClose, onSignInClick }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          <img src={CloseIcon} alt="CloseIcon" className="modal__close-icon" />
        </button>
        <h2 className="success-modal__title">
          Registration successfully completed!
        </h2>
        <button className="success-modal__link" onClick={onSignInClick}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;

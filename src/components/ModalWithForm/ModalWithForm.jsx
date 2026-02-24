import { useEffect } from "react";
import "./ModalWithForm.css";
import CloseIcon from "../../assets/close.svg";

function ModalWithForm({
  isOpen,
  onClose,
  title,
  buttonText,
  onSubmit,
  children,
  bottomLinkText,
  onBottomLinkClick,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          {" "}
          <img src={CloseIcon} alt="Close" className="modal__close-icon" />
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={handleSubmit}>
          {children}
          <button type="submit" className="modal__button">
            {buttonText}
          </button>
          <p className="modal__text">
            or
            <button
              type="button"
              className="modal__link"
              onClick={onBottomLinkClick}
            >
              {bottomLinkText}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

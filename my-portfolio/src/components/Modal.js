import React from 'react';

function Modal({ isOpen, onClose, children, header, projectType}) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-button" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
          <h2>{header}</h2>
          <h3>{projectType}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;

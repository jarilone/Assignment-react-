import React from "react";
import "./ImagePreviewModal.css"; 

const ImagePreviewModal = ({ image, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.title} className="modal-image" />
        <p className="modal-title">{image.title}</p>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImagePreviewModal;

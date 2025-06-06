import React from "react";
import { useState } from "react";
import ImagePreviewModal from "./ImagePreviewModal";

const Card = ({ CardItem, selectedImage, onClickAction, closeModal }) => {
  const [likeBtn, setLikeBtn] = useState(false);

  // Handles like Button
  const handleLike = () => {
    const oldLike = likeBtn;
    const updateLike = !oldLike;

    setLikeBtn(updateLike);
  };
  return (
    <>
      <div className="image_1">
        <img
          className="img-border"
          src={CardItem.src}
          alt=""
          onClick={onClickAction}
        />
        <div className="image_text">
          <span>{CardItem.title}</span>

          <svg
            onClick={handleLike}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={likeBtn ? "red" : "none"}
            stroke={likeBtn ? "red" : "currentColor"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              width: "32px",
              height: "32px",
              cursor: "pointer",
              transition: "fill 0.3s ease",
            }}
          >
            <path d="M20.8 4.6c-1.5-1.4-3.8-1.4-5.3 0l-.5.5-.5-.5c-1.5-1.4-3.8-1.4-5.3 0-1.6 1.6-1.6 4.1 0 5.6l5.8 5.8 5.8-5.8c1.6-1.5 1.6-4 0-5.6z" />
          </svg>

          {selectedImage && (
            <ImagePreviewModal image={selectedImage} onClose={closeModal} />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;

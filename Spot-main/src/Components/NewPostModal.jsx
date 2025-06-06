import React, { useState, useEffect } from "react";
import "./NewPostModal.css";

const NewPostModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [liked, setLiked] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validTitle = title.length >= 2 && title.length <= 100;
    const validImage = image !== null;

    setFormValid(validTitle && validImage);

    setErrors({
      title: !validTitle ? "Title must be 2 to 100 characters" : "",
      image: !validImage ? "Image is required" : "",
    });
  }, [title, image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handlePost = (e) => {
    e.preventDefault();
    if (!formValid) return;
    console.log({ title, image, liked });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2>Create New Post</h2>
        <form onSubmit={handlePost}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              minLength={2}
              maxLength={100}
              placeholder="Enter a title"
            />
            {errors.title && <small className="error">{errors.title}</small>}
          </label>

          <label>
            Upload Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {errors.image && <small className="error">{errors.image}</small>}
          </label>

          {preview && (
            <img src={preview} alt="Preview" className="preview-image" />
          )}

          <label>
            <input
              type="checkbox"
              checked={liked}
              onChange={() => setLiked(!liked)}
            />
            ❤️ Like this post
          </label>

          <button type="submit" disabled={!formValid} className="postBtn">
            Post
          </button>
          <button type="button" onClick={onClose} className="cancelBtn">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPostModal;

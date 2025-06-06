import React, { useState } from 'react';

const EditProfileModal = ({ onClose }) => {
  const [name, setName] = useState(''); // Initialize with current user data
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Profile Picture:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          {preview && <img src={preview} alt="Preview" width="100" />}
          <button type="submit" className="postBtn">Save Changes</button>
          <button type="button" onClick={onClose} className="postBtn">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
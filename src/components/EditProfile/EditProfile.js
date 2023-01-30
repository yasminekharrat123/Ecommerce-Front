import React, { useState } from "react";
import "../EditProfile/EditProfile.css"

const EditProfile = () => {
  const [name, setName] = useState("Your Name");
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [description, setDescription] = useState("Enter your description");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <h2>Profile Page</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={props.name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" value={props.image} onChange={handleImageChange} />
        <img src={image} alt={name} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={props.description} onChange={handleDescriptionChange} />
      </div>
      <div>
        <p>Email: {props.email}</p>
      </div>
    </div>
  );
};

export default EditProfile;

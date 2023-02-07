import React, { useState, useRef } from "react";
import NavBar from "../NavBar/NavBar";
import "./Profile.css"

const EditProfile = () => {
  const [name, setName] = useState("Mon Nom");
  const [description, setDescription] = useState("Bref description");

  const imageInput = useRef(null);

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    setName("");
    setDescription("");
    setImagePreview(null);
    imageInput.current.value = null;
  };

 
  return (
    <div class="row">
    <NavBar/>
       <div class="col-md">
        <div className="profile-container">
          <form className="the-box">
            <div class="button-container">
            <img src={imagePreview || "https://i.pinimg.com/236x/34/d4/a2/34d4a2ddeaa0c13d151de7f11ca6418b.jpg"} alt="image produit" 
                  className="profile-image" />
                  <div>
                    <label className="custom-file-upload">
                      Cliquer Pour Changer La Photo De Profil
                      <input type="file" ref={imageInput} onChange={handleImageChange} className="image-input"/>
                    </label>
                  </div>
            </div>
            <br/><ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-md custom-width">
                <div>
                  <h6 class="my-0">Nom</h6>
                  <input type="text" className="text-muted" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
              </li><br/>
              <li class="list-group-item d-flex justify-content-between lh-md custom-width">
                <div>
                  <h6 class="my-0">Email</h6>
                  <input type='email' class="text-muted"/>
                  
                </div>
              </li><br/>
              <li class="list-group-item d-flex justify-content-between lh-md custom-width">
                <div>
                  <h6 class="my-0" className="profile-description">Description</h6>
                  <textarea class="text-muted" style={{width:'270%'}} value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                </div>
              </li><br/><br/><br/>
            </ul>
            <div style={{position: 'relative', left: '150px',top:'3px'}}>
            <button type="submit" onClick={handleAddProduct}>Save</button></div>
          </form>
        </div>
        </div>
    </div>
  );
};

export default EditProfile;

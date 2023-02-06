import React, { useState, useRef } from "react";
import "./ProfileSeller.css"

const EditProfile = () => {
  const [name, setName] = useState("Mon Nom");
  const [service, setService] = useState("Service");

  const imageInput = useRef(null);

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    setName("");
    setService("");
    setImagePreview(null);
    imageInput.current.value = null;
  };

 
  return (
    <div class="row">
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
                  <small class="text-muted">myadresse@mail.com</small>
                  
                </div>
              </li><br/>
              <li class="list-group-item d-flex justify-content-between lh-md custom-width">
                <div>
                  <h6 class="my-0" className="profile-service">Nom De Service</h6>
                  <input type="text" className="text-muted"  value={service} onChange={(event) => setService(event.target.value)}/>
                </div>
              </li><br/>
            </ul>
            <div style={{position: 'relative',left: '200px',top:'3px'}}>
            <button type="submit" onClick={handleAddProduct}>Save</button></div>
          </form>
        </div>
        </div>
    </div>
  );
};

export default EditProfile;

import React, { useState, useRef } from "react";
import "./ProfileSeller.css"
const EditProfile = ({agent}) => {
  const [name, setName] = useState("John");
  const [description, setDescription] = useState("Hello...");
  const [email,setEmail]=useState("John@john.com");
  const [service,setService]=useState("serv1");
  const imageInput = useRef(null)
  const [imagePreview, setImagePreview] = useState(null);
  const [modify,setmodify]= useState(false);
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

 
  function lockform(event)
  {
    event.preventDefault();
      const elements=document.querySelectorAll("input,textarea");
      elements.forEach((element)=>{element.disabled=modify;});
      const save_btn=document.querySelector(".save");
      save_btn.classList.toggle("disabled");
      save_btn.disabled=modify;
      const mod_btn=document.querySelector(".mod_button");
      mod_btn.classList.toggle("disabled");
      mod_btn.disabled=!modify;
      setmodify(!modify);

  }

    const element_buyer= <textarea className="form__text__field" id="third_field" maxLength={150} value={description} onChange={
      (e)=>
      {
          setDescription(e.target.value);
      }} disabled></textarea>;
    const element_seller= <input className="form__field"  id="third_field" value={service} onChange={
      (e)=>
      {
          setService(e.target.value);
      }} disabled/>



  return (
      <div className="profile_page_container">
        <div className="profile__form__group">
        <button class="mod_button" onClick={lockform}>
                  <svg   xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="Black" className="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path  fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                  </svg>
        </button>
          <form  className="profile__form" onSubmit={lockform}>
            {/* <div class="button-container"> */}
            <img src={imagePreview || "https://i.pinimg.com/236x/34/d4/a2/34d4a2ddeaa0c13d151de7f11ca6418b.jpg"} alt="image produit" 
                  className="profile-image" />
                  <div>
                    <label className="custom-file-upload">
                      {(modify)?"Cliquer pour changer la photo de profil":""}
                      <input type="file" ref={imageInput} onChange={handleImageChange} className="image-input"></input>
                    </label>
                  </div>  
            {/* </div> */}


            <label  className="profile__label" for="name">Nom:</label>
            <input className="form__field" type="text" id="name" name="name" value={name} onChange={
              (e)=>
              {
                  setName(e.target.value);
              } } disabled />

            
 

            <label className="profile__label" for="email">Email:</label>
            <input className="form__field" type="email" id="email" name="email" value={email} onChange={
              (e)=>
              {
                  setEmail(e.target.value);
              }
            } disabled />


            <label className="profile__label" for="third_field">{(agent=="Client")?"Description:":"Nom de Service"}</label>
            {(agent==="Client")?element_buyer:(element_seller)}
            <button className="form__buttons save disabled" type="submit" disabled > Save </button>
          </form>
        </div>
        </div>

  );
};

export default EditProfile;

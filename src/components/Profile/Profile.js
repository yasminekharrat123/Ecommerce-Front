import React from "react";
import "./Profile.css"

const Profile = () => {
 
  return (
    <div class="row">
       <div class="col-md">
        <div className="profile-container">
          <div className="the-box">
            <div class="button-container">
            <img src="https://i.pinimg.com/236x/34/d4/a2/34d4a2ddeaa0c13d151de7f11ca6418b.jpg" className="profile-image" alt="Profile" />
            <span>
              <a href="#">
                <button className="edit-button">
                <svg xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="50"
                fill="current color"
                class="bi bi-pencil" 
                viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
                </button>
              </a>
            </span>
            </div>
            <br/><ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-md custom-width">
                <div>
                  <h6 class="my-0">Nom</h6>
                  <small class="text-muted">Mon Nom</small>
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
                  <h6 class="my-0" className="profile-description">Description</h6>
                  <small class="text-muted">Bref description</small>
                </div>
              </li><br/><br/><br/>
            </ul>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Profile;

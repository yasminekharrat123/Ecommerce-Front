import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Product/Product.css";
export default function Product(props) {
  const remove = () => {
    const element = document.getElementById("remove");
    element.classList.add("delete");
  };

  return (
    <div className="card" id="remove">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title price">{props.price} TND</h5>
        <p className="card-text">{props.description}</p>
        <span>
          <button onClick={() => remove()} className="modern-button RemButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 20 20"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
            Supprimer du panier
          </button>
        </span>
      </div>
    </div>
  );
}

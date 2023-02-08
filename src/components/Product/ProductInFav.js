import React, { useState } from "react";
import "../Product/Product.css";
export default function Product(props) {


  const remove = () => {
    const element = document.getElementById("remove");
    element.classList.add("delete");
  };

  const [nbProduit, setNbProduit] = useState(0);

  const addNb = () => {
    setNbProduit(nbProduit + 1);
  };
  const removeNb = () => {
    if (nbProduit > 0) setNbProduit(nbProduit - 1);
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
            Supprimer du Favoris
          </button>
        </span>
        <span>
          <button onClick={() => addNb()} className="modern-button cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-basket2 basket"
              viewBox="0 0 16 16"
            >
              <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
            </svg>
            Ajouter au Panier
            {nbProduit != 0 ? <span>({nbProduit})</span> : null}
          </button>
        </span>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Product/Product.css";
export default function Product(props) {
  const [nbProduit, setNbProduit] = useState(0);
  const [isFav, setIsFav] = useState(false);

  const addNb = () => {
    setNbProduit(nbProduit + 1);
  };
  const removeNb = () => {
    if (nbProduit > 0) setNbProduit(nbProduit - 1);
  };
  const handleFav = () => {
    setIsFav(!isFav);
  };

  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
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
            Add to Cart {nbProduit != 0 ? <span>({nbProduit})</span> : null}
          </button>
        </span>
        <span>
          <button onClick={() => handleFav()} className="modern-button">
            {isFav ? (
              <span>
                <img
                  width={16}
                  height={16}
                  src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                />{" "}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            )}
            Add to Favorites
          </button>
        </span>
      </div>
    </div>
  );
}

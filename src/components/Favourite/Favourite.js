import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import ProductInFav from "../Product/ProductInFav";
import { Link } from "react-router-dom";

export default function Favourite() {
  const a = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUj7REegokAcagfwjWREyFtWu_yPqCpvDLTS_J7Oq&s",
    title: "ProductInCart",
    description: "Descreption:ProductInCart",
  };

  const [CartProducts, setCartProducts] = useState([a, a, a]);

  return (
    <div>
      <NavBar />
      <br />
      <div>
        <h6 className="titre">Favoris:</h6>
      </div>

      <div className="ProductsList container">
        {CartProducts.length > 0
          ? CartProducts.map((u) => {
              return (
                <div className="ProductList cart">
                  <ProductInFav
                    title={u.title}
                    description={u.description}
                    image={u.image}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

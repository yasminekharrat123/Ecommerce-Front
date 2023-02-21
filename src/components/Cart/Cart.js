import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import ProductRemove from "../Product/ProductRemove";
import "./Cart.css";
import { Link } from "react-router-dom";
import { PlusMoins } from "../PlusMoins/PlusMoins";
import Footer from "../footer/Footer";

export default function Cart() {
  const a = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUj7REegokAcagfwjWREyFtWu_yPqCpvDLTS_J7Oq&s",
    title: "ProductInCart",
    description: "Descreption:ProductInCart",
  };

  const [CartProducts, setCartProducts] = useState([a, a, a, a, a, a]);
  const [CommandePassez, setCommandePassez] = useState(false);

  if (!CommandePassez)
    return (
      <div>
        <NavBar />
        <h1 className="titre">Votre Panier:</h1>
        <div className="row my-4 container">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Image</th>
                      <th>Nom</th>
                      <th>Prix</th>
                      <th>Quantité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartProducts.map((item) => (
                      <tr>
                        <td></td>
                        <td>
                          <img
                            src={item.image}
                            className="fluid rouned"
                            width={60}
                            height={60}
                            alt=""
                          />
                        </td>
                        <td>{item.title}</td>
                        <td>20 TND</td>
                        <td>
                          <PlusMoins />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <th colSpan={5} className="text-center">
                        Total:
                      </th>
                      <td>
                        <span className="badge bg-danger rounded-pill">
                          9999$
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="valbttn">
          <button
            className="pbttn"
            onClick={() => {
              setCartProducts({});
              setCommandePassez(true);
            }}
          >
            Passez Commande
          </button>
        </div>
        <Footer />
      </div>
    );
  else
    return (
      <div>
        Passer une commande <Link to={"/Buyer"}> ici</Link>
        <Footer />
      </div>
    );
}

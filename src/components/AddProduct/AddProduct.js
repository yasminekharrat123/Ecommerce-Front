import React, { useState, useRef } from "react";
import Product from "../Product/Product";
import "./AddProduct.css"

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  const imageInput = useRef(null);

  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setImagePreview(URL.createObjectURL(selectedFile));
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    setProducts([...products, { title, imagePreview, price, description }]);
    setTitle("");
    setPrice(0);
    setQuantity(0);
    setDescription("");
    setImagePreview(null);
    imageInput.current.value = null;
  };

  return (
        <div className="profile-container">
          <div className="the-box">
          <form> <div class="row">
                  <img src={imagePreview || "https://i.pinimg.com/564x/ba/1b/3a/ba1b3a5b00239da009b9733a4a943326.jpg"} alt="image produit" 
                  className="product-image" />
                  <div>
                    <label className="custom-file-upload">
                      Cliquer Pour Ajouter Une Image
                      <input type="file" ref={imageInput} onChange={handleImageChange} className="image-input"/>
                    </label>
                  </div><br/><br/><br/>
                        <div>
                        <label for="name">Nom Du Produit </label><br/>
                          <input type="text"id="name" className="form-control" placeholder="Nom Du Produit" value={title}
                            onChange={(event) => setTitle(event.target.value)} />
                        </div><br/><br/><br/>
                        <div class="row">
                        <div class="col">
                        <label for="price">Prix Du Produit </label>
                        <div class="list-group-item d-flex justify-content-between lh-sm">
                          <input type="number" id="price" value={price}
                            onChange={(event) => setPrice(event.target.value)} className="price"/>
                          <span class="text-muted" style={{position: 'absolute', left: '150px',top:'3px'}}>dt</span>
                        </div>
                        </div>
                        <div class="col">
                          <label for="nbr">Quantité</label><br/>
                          <input type="number" id="quantity" value={quantity}
                            onChange={(event) => setQuantity(event.target.value)} className="quantity"/>
                        </div></div><br/><br/><br/>
                        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} 
                          placeholder="Description" onChange={(event) => setDescription(event.target.value)}></textarea>
                        </div><br/><br/><br/><br/><br/><br/><br/><br/>
                <button type="submit" onClick={handleAddProduct}>Ajouter Produit</button>
              
                </div></form>
          </div>
          <h3>Products List</h3>
              <ul>
                {products.map(p => (
                  <li key={p.title}>
                    <Product product={p} />
                  </li>
                ))}
                </ul>
        </div>
  );
};

export default ProductForm;

import React, { useState } from "react";
import SellerHome from "../SellerHome/SellerHome";
const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);

  const handleAddProduct = (event) => {
    event.preventDefault();
    setProducts([...products, { title, image, price, description }]);
    setTitle("");
    setImage("");
    setPrice(0);
    setDescription("");
  };

  return (
    <div>
      <form>
        <div>
          <label for="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label for="image">Image:</label>
          <input
            type="file"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div>
          <label for="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div>
          <label for="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button type="submit" onClick={handleAddProduct}>
          Add Product
        </button>
      </form>
      
    </div>
  );
};

export default ProductForm;
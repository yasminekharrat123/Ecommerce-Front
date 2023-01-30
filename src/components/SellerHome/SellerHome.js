import React from "react";
import NavbarSeller from "../NavbarSeller/NavbarSeller";
import ProductSeller from "../ProductSeller/ProductSeller";

export default function SellerHome({ products }) {
  return (
    <div>
        <NavbarSeller/>
      <h3>Products List</h3>
      <ul>
        {products.map(p => (
          <li key={p.title}>
            <ProductSeller product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
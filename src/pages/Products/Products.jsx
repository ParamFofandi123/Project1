import React from "react";
import Breadcrums from "../../components/Breadcrums/Breadcrums";
import "./Products.css";
import { products } from "../../data/products";

export default function Products() {
  return (
    <div>
      <Breadcrums title="Products" image="/images/banner.jpg" />
      <div className="products-container">
        {products.map((products) => (
          <div key={products.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={products.image} alt={products.name} />
            </div>
            <h3>{products.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
XMLDocument
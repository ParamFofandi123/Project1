import React from "react";
import Breadcrums from "../../components/Breadcrums/Breadcrums";
import "./Products.css";
import { products } from "../../data/products";

export default function Products() {
  return (
    <div>
      <Breadcrums title="Products" image="/images/banner.jpg" />
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.img} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
XMLDocument
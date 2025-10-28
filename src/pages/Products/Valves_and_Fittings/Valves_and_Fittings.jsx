import React from "react";
import Breadcrums from "../../../components/Breadcrums/Breadcrums";
import "./Valves_and_Fittings.css";
import { products } from "../../../data/products";

export default function Valves_and_Fittings() {
   const floatProducts = products.filter((p) => p.category === "Valves & Fittings");
  return (
    <div>
      <Breadcrums title="Level Intstuments and Flappers" image="/images/banner.jpg" />
      <div className="products-container">
        {floatProducts.map((products) => (
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

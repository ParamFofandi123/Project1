import React from "react";
import Breadcrums from "../../../components/Breadcrums/Breadcrums";
import "./Level_instruments_and_flappers.css";
import { products } from "../../../data/products";

export default function Level_instruments_and_flappers(){
   const floatProducts = products.filter((p) => p.category === "Level Instruments & Flappers");
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
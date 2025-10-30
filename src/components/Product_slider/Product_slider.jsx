import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Product_slider.css"; // ← your CSS file

import products from "../../data/products"; // adjust path as needed

const ProductSlider = () => {
  return (
    <div className="product-slider">
      <h2 className="slider-title">Featured Products</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },        // Mobile
          600: { slidesPerView: 2 },      // Tablet
          1024: { slidesPerView: 3 },     // Desktop
        }}
      >
        {products
          .sort(() => Math.random() - 0.5) // randomly shuffle
          .slice(0, 6)                     // pick 6 random
          .map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.category}</p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;

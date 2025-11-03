import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Product_slider.css";

import products from "../../data/products"; 

const ProductSlider = () => {
  return (
    <section className="product-slider">
      <h2 className="slider-title">Featured Products</h2>

      <div className="slider-container">
      
        <button className="swiper-button-prev" aria-label="Previous"></button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="swiper-wrapper-container"
        >
          {products
            .sort(() => Math.random() - 0.5)
            .slice(0, 6)
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

        <button className="swiper-button-next" aria-label="Next"></button>
      </div>
    </section>
  );
};

export default ProductSlider;

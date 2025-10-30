import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { products } from "../../data/products";
import "./Product_slider.css";
import { Link } from "react-router-dom";

export default function ProductSlider() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Shuffle and pick 6 random products
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    setRandomProducts(shuffled.slice(0, 6));
  }, []);

  return (
    <div className="product-slider">
      <h2 className="slider-title">Featured Products</h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {randomProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={"/products"}>
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

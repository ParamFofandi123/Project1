import React, { useState, useEffect } from "react";
import "./Home.css";
import "./Banner/Banner";
import Banner from "./Banner/Banner";

export default function Home() {
  const images = [
    "https://picsum.photos/id/1018/1200/400",
    "https://picsum.photos/id/1015/1200/400",
    "https://picsum.photos/id/1019/1200/400",
    "https://picsum.photos/id/1020/1200/400",
  ];

  const slideTexts = [
    { title: "Welcome to Our Website", subtitle: "Delivering quality and innovation" },
    { title: "Explore Our Products", subtitle: "Top-notch quality you can trust" },
    { title: "Creative Solutions", subtitle: "Driven by technology and passion" },
    { title: "Let's Build Together", subtitle: "Partner with us for success" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="home-container">
      {/* Slideshow Banner */}
      <div className="slideshow">
  {images.map((img, i) => (
    <div
      key={i}
      className={`slide ${i === currentIndex ? "active" : ""}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="slide-text">
        <h1>{slideTexts[i].title}</h1>
        <p>{slideTexts[i].subtitle}</p>
      </div>
    </div>
  ))}

  {/* Previous & Next */}
  <button className="prev" onClick={prevSlide}>
    ❮
  </button>
  <button className="next" onClick={nextSlide}>
    ❯
  </button>
</div>

      <div className="mission-text">
        <h1>MISSION</h1>
        <p className="paragraph">
          Our Mission is to be committed and continuously improve in all our
          business activities in order to serve our Customers and Provide cost
          effective best possible solution and a comprehensive range of high
          standard performance and most cost-effective products, through our
          internationally recognized Principals.
        </p>
      </div>
      <Banner />
    </div>
  );
}

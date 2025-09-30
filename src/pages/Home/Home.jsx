import React, { useState, useEffect } from "react";
import "./Home.css";
import "./Banner/Banner"
import Banner from "./Banner/Banner";

export default function Home() {
  const images = [
    "https://picsum.photos/id/1018/1200/400",
    "https://picsum.photos/id/1015/1200/400",
    "https://picsum.photos/id/1019/1200/400",
    "https://picsum.photos/id/1020/1200/400"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slideshow
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <div className="home-container">
      {/* Slideshow Banner */}
      <div className="slideshow">
  {images.map((img, i) => (
    <img
      key={i}
      src={img}
      alt={`Slide ${i}`}
      className={`slide ${i === currentIndex ? "active" : ""}`}
    />
  ))}

  {/* Previous & Next */}
  <button className="prev" onClick={prevSlide}>❮</button>
  <button className="next" onClick={nextSlide}>❯</button>

  {/* Pause/Resume */}
  <button className="pause" onClick={togglePause}>
    {isPaused ? "▶" : "⏸"}
  </button>
</div>

      <div className="mission-text">
        <h1>
          MISSION
        </h1>
        <p className="paragraph">
          Our Mission is to be committed and continuously improve in all our business activities in order to serve our Customers and Provide cost effective 
          best possible solution and a comprehensive range of high standard performance and most cost-effective products, through our internationally recognized Principals.
        </p>
      </div>
      <Banner/>

    </div>
  );
}

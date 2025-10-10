import React, { useState, useEffect } from "react";
import "./Home.css";
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

  // Start at index 1 (because index 0 will be the "clone" of last slide)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [animateText, setAnimateText] = useState(true);

  const totalSlides = images.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    triggerTextAnimation();
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
    triggerTextAnimation();
  };

  const triggerTextAnimation = () => {
    setAnimateText(false);
    setTimeout(() => setAnimateText(true), 50);
  };

  // Handle the "jump" without animation
  useEffect(() => {
    if (currentIndex === totalSlides + 1) {
      // jumped past the last real slide → go to first real slide
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(1);
      }, 300); // matches CSS transition duration
    }
    if (currentIndex === 0) {
      // jumped before the first real slide → go to last real slide
      setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalSlides);
      }, 300);
    }
  }, [currentIndex, totalSlides]);

  // Re-enable transition after the jump
  useEffect(() => {
    if (!transitionEnabled) {
      setTimeout(() => setTransitionEnabled(true), 50);
    }
  }, [transitionEnabled]);

  return (
    <div className="home-container">
      {/* Slideshow */}
      <div className="slideshow">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: transitionEnabled ? "transform 0.3s ease-in-out" : "none",
          }}
        >
          {/* Clone of last slide at beginning */}
          <div
            className="slide"
            style={{ backgroundImage: `url(${images[totalSlides - 1]})` }}
          >
            <div className="slide-text">
              <h1>{slideTexts[totalSlides - 1].title}</h1>
              <p>{slideTexts[totalSlides - 1].subtitle}</p>
            </div>
          </div>

          {/* Real slides */}
          {images.map((img, i) => (
            <div key={i} className="slide" style={{ backgroundImage: `url(${img})` }}>
              <div
                className={`slide-text ${
                  animateText && currentIndex === i + 1 ? "animate" : ""
                }`}
              >
                <h1>{slideTexts[i].title}</h1>
                <p>{slideTexts[i].subtitle}</p>
              </div>
            </div>
          ))}

          {/* Clone of first slide at end */}
          <div className="slide" style={{ backgroundImage: `url(${images[0]})` }}>
            <div className="slide-text">
              <h1>{slideTexts[0].title}</h1>
              <p>{slideTexts[0].subtitle}</p>
            </div>
          </div>
        </div>

        {/* Prev & Next buttons */}
        <button className="prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Mission Section */}
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

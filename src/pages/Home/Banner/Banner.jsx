import React from "react";
import "./Banner.css";
import Pamphlate from "../../../assets/DWYER.jpg";
import Card1 from "../../../assets/Visiting_Card_01.jpg";
import Card2 from "../../../assets/Visiting_Card_02.jpg";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        {/* Two YouTube videos */}
        <div className="videos">
          <iframe
            width="544"
            height="320"
            src={Card1}
            title="YouTube Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* <iframe
            width="300"
            height="170"
            src={Card2}
            title="YouTube Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>

        {/* Portrait pamphlet */}
        {/* <div className="pamphlet">
          <img
            src={Pamphlate}
            alt="Pamphlet"
          />
                
        </div> */}
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p className="paragraph">
            Our vision is to become a trusted global leader in the field of
            industrial measurement and control solutions by delivering products
            that set new standards for precision, reliability, and innovation.
            We aim to empower industries across sectors with advanced
            technologies for measuring and controlling level, temperature,
            pressure, flow, and more. Through continuous improvement, superior
            quality, and customer-focused solutions, we strive to drive
            efficiency, safety, and excellence in every operation we support.
          </p>
        </div>
      </div>
    </div>
  );
}

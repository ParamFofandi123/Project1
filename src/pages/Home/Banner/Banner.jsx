import React from "react";
import "./Banner.css";
import Pamphlate from "../../../assets/DWYER.jpg"

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        {/* Two YouTube videos */}
        <div className="videos">
          <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="300"
            height="170"
            src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
            title="YouTube Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Portrait pamphlet */}
        <div className="pamphlet">
          <img
            src={Pamphlate}
            alt="Pamphlet"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Breadcrums from "../../components/Breadcrums/Breadcrums";
import img1 from "../../assets/about-us-img.jpg";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <Breadcrums title="About" image="/images/banner.jpg" />
      <div className="about-us">
 
        <div className="content-box1">
          <div className="image-box1">
            <img src={img1} />
          </div>
          <div className="title1">
            <h2>Winova Solutions</h2>
            <ul>
              <li>We do customize float designing as per your data.</li>
              <li>
                Floats are Design in different material like Stainless Steel,
                Titanium, Hastelloy-C, Inconel, Tantalum, PVDF, PTFE and others.
              </li>
              <li>We have Steps of Testing for Floats.</li>
              <li>Large inventory of floats ready to ship worldwide</li>
              <li>
                We stock many common sizes and are happy to add your size to our
                inventory
              </li>
              <li>
                Shapes include round float balls and oval floats (if you require
                a different shape, just ask)
              </li>
              <li>Competitive prices</li>
            </ul>
            <p className="paragraph1">
              Winova Solutions play a big part in your liquid flow regulation
              solution. Ours are manufactured in a state-of-the-art facility,
              made of high-quality material, and they ensure years of quality
              operation, even in extreme conditions.
            </p>
          </div>
        </div>
                  
      </div>
    </div>
  );
}

import React from "react";
import './AboutUs.css';
import aboutimg from './human-profile-isometric.svg'
function AboutUs() {
  return (
    <div id="about">
      <h1 className="about-title">About Us</h1>
      <p id="text">
        We are the first and the best gaming shop u will ever need in your life.
        <br />
        We have the cheapest and offer the best quality products.
        <br />
        Let's build your cave togther with our team of experts.
      </p>
      <img className="img-about" src={aboutimg} alt="img"/>
    </div>
  );
}

export default AboutUs;

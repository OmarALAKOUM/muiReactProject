import React from "react";
import "./HomePage.css";
import svgs from '../gaming-isometric.svg';
function HomePage() {
  return (
    <div>

    <h2 className="toptitle">Welcome To Your Gaming Shop</h2>
    <div className="homepage-container">
    
    <p>
      Explore our amazing collection of products and find exactly what you
      need.
    </p>
    <div className="image-container">
    <img style={{
      width: "400px",
    }} src={svgs} alt="Your SVG" />
    </div>
    
  </div>
  </div>
  );
}

export default HomePage;

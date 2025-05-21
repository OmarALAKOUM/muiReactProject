import React, { useContext, useState } from "react";
import { LoginContext, UserContext, CartContext } from "../App";
import { Link } from "react-router-dom";
import './ProductDetails.css';
import axios from "axios";

function ProductDetails(props) {
  const data = props.data;
  const [login, setLogin] = useContext(LoginContext);
  const [user] = useContext(UserContext);
  const [, , addtoCart] = useContext(CartContext);

  // State for controlling the visibility of the pop-up
  const [showPopUp, setShowPopUp] = useState(false);

  const handleAddToCart = () => {
    addtoCart(data);
    // Show the pop-up
    setShowPopUp(true);
    // Hide the pop-up after 2 seconds (adjust the timeout as needed)
    setTimeout(() => setShowPopUp(false), 2000);
  };

  return (
    <div className="Details-content">
      <img className="details-img" src={props.data.img} alt="pic"></img>
      <div>
        <div className="prod-card">
        <h2 className="prod-title">{data.title}</h2>
        <p>{data.details}</p>
        <h3>Price: ${data.price}</h3>
        {login ? (
          <button className="addtocart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        ) : (
          <div>
            <p>you need to login before adding items to your cart</p>
            <Link to={"/Login"}>
              <button className="addtocart">Login</button>
            </Link>
          </div>
        )}
      </div>
        </div>
      {showPopUp && (
        <div className={`popup ${showPopUp ? 'active' : ''}`}>
        <p>Item added to cart!</p>
      </div>
      )}
    </div>
  );
}

export default ProductDetails;

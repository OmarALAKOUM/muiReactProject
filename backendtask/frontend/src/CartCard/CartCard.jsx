import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../App";
import './CartCard.css';

function CartCard(props) {
  const [cart, setCart, addtoCart, removeCart] = useContext(CartContext);
  const value = props.value;
  const [showPopUp, setShowPopUp] = useState(false);



  useEffect(() => {
    if (showPopUp) {
      const timeoutId = setTimeout(() => setShowPopUp(false), 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [showPopUp, value]);


  return (
    <div>
      {props.total && <p className="total-price">Total: ${props.total.toFixed(2)}</p>}
        <div className="cart-body">
      
      <div>
      <img className="cart-img" src={value.img} alt="pic"></img>
      </div>
      <div>
      <h2>{value.title}</h2>
      <p>${value.price}</p>
      <p>{value.details}</p>
      <button className="addtocart"
        onClick={(e) => {
          e.preventDefault();
          removeCart(value);
          setShowPopUp(true);
        }}
      >
        Remove
      </button>
      </div>
      {showPopUp && (
        <div className="popup">
          <p>Item removed from cart!</p>
        </div>
      )}
    </div>
    </div>
    
  );
}

export default CartCard;

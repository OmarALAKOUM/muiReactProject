import React from "react";
import { Link } from "react-router-dom";
import "./CardProduct.css";
function CardProduct(props) {
  return (
    <div className="card-body">
      <div className="cards">
      <img className="card-img" src={props.data.img} alt="pic"></img>
        <div className="content-text">
       
      <p>
        <span className="prod-title">{props.data.title}</span>
      </p>
      <p>
        <span>Description: {props.data.details}</span>
      </p>
      <span>Price: ${props.data.price}</span>
      <p>
        <Link to={props.data.url}><button className="click-button"> <span className="click-span">Details</span></button></Link>
      </p>
        </div>
      

      </div>
      
    </div>
  );
}

export default CardProduct;

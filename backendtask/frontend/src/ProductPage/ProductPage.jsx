import React from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Product.css";
function ProductPage(props) {
  return (
    <div>
      <div id="cards">
        {props.data.map((d, i) => {
          return <CardProduct key={i} data={d} />;
        })}
      </div>
    </div>
  );
}

export default ProductPage;

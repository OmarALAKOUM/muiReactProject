import React, { useContext, useEffect, useState } from "react";
import "./CartPage.css";
import { CartContext, LoginContext } from "../App";
import { Link } from "react-router-dom";
import CartCard from "../CartCard/CartCard";

function CartPage() {
  // const [user] = useContext(UserContext);
  const [login] = useContext(LoginContext);
  const [cart, ,] = useContext(CartContext);
  const [nCart, setNCart] = useState([]);
  useEffect(() => {
    setNCart(cart);
  }, [cart]);

  const total = nCart.reduce((acc, item) => acc + item.price, 0);
 
  return (
    <div>
      {login ? (
        nCart.length > 0 ? (
          nCart.map((item, index) => {
            return <CartCard key={index} value={item} total={index === 0 ? total : undefined} />;
          })
        ) : (
          <p>
            Cart Empty go to <Link to={"/"}>Home</Link> to view items
          </p>
        )
      ) : (
        <p>
          <Link to={"/Login"}>Login</Link> to view items
        </p>
      )}
    </div>
  );
}

export default CartPage;

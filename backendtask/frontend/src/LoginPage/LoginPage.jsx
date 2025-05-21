import React, { useContext, useState } from "react";
import axios from "axios";
import { LoginContext, UserContext, CartContext } from "../App";
import "./LoginPage.css";
import { Link } from "react-router-dom";
function LoginPage() {
  const [users, setUsers] = useState("");
  const [pass, setPass] = useState("");
  const [, setLogin] = useContext(LoginContext);
  const [, setUser] = useContext(UserContext);
  const [, setCart] = useContext(CartContext);

  const handleuser = (e) => {
    setUsers(e.target.value);
  };
  const handlepass = (e) => {
    setPass(e.target.value);
  };
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username: users,
        password: pass,
      });
      setLogin(true);
      setUser(response.data.user);
      setCart(response.data.user.cart);
      console.log(response.data.message);
      localStorage.setItem("Token", response.data.user.id);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div className="login_container">
    <form class="form">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input onChange={handleuser} type="email" placeholder="Enter email"/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input onChange={handlepass} type="password" placeholder="Enter password"/>
        </div>
         <button onClick={submit} type="submit" class="submit">
        Sign in
      </button>

      <p class="signup-link">
        No account?
        <Link to={"/Register"}>Sign up</Link>
      </p>
   </form>


    </div>
  );
}

export default LoginPage;

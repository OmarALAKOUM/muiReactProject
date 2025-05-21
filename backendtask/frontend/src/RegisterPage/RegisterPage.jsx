import React, { useState } from "react";
import axios from "axios";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUser = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/register", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error.response.error);
      });
  };
  return (
    <div className="login_container">
      <div class="form-box">
<form class="form">
    <span class="title">Sign up</span>
    <div class="form-container">
			<input onChange={handleUser} type="email" class="input" placeholder="Email"/>
			<input onChange={handlePassword} type="password" class="input" placeholder="Password"/>
    </div>
    <button onClick={submit}>Sign up</button>
</form>
<div class="form-section">
  <p>Have an account? <Link to={"/login"}>Log in</Link> </p>
</div>
</div>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import "../styles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  return (
    <div className="login-container">
      <div className="black-container">
        <h1>Welcome Back!</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("email", email);
            console.log("password", password);
          }}
          className="form-container"
        >
          <input
            type="text"
            className="input"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              console.log("e", e.target.value);
              setEmail(e.target.value);
            }}
          />
          <input
            className="input"
            type={type}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              console.log("e", e.target.value);
              setPassword(e.target.value);
            }}
          />
          {/* <div className="eye"></div> */}
          <button
            className="login-button"
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            //   setType(type === "password" ? "text" : "password");
            // }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

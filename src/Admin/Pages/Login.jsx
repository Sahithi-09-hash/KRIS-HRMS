import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === "admin@com" && password === "123456") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  }
  
  return (
    <div className="login-background">
    <div className="login-container">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
      <div className="login-box">
        <h1 id="login">Login</h1>
        <p id="loginto">Login to your account.</p>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>E-mail Address</label>
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="remember-forgot">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <p id="pass">Reset Password?</p>
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;

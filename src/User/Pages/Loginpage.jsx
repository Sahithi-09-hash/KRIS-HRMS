import React , { useState } from "react";
import "./loginpage.css";
import { useNavigate } from "react-router-dom";

const loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
  
    const Loginuser = (e) => {
      e.preventDefault();
      
      if (email === "john@com" && password === "654321") {
        navigate("/userDashboard");
      } else {
        alert("Invalid credentials");
      }
    }
  return (
    <div className="loginpage">
      <div className="leftside">
        <div>
      <img src="/assets/krislogo.png" alt="Logo" className="Kris" />
        </div>
      <h1>Login</h1>
      <p id="account">Login to your account.</p>
      <form onSubmit={Loginuser}>
        <div className="inputfield">
          <label>E-mail Address</label>
          <input type="email"  className='field' onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div className="inputfield">
          <label>Password</label>
          <input type="password"  className='field' onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        <div id="checkboxes">
        <input type="checkbox" className="checkbox" />
        <label htmlFor="" className="rememberme">Remember me</label>
        <p id="password">Reset Password?</p>
        </div>
        <button className='signin'>Sign in</button>
        <p id="yet">Dont't have an account yet? <span id="join">Join KRIS today</span></p>  
      </form>  
      </div>
      <div className="rightside">
        <h2 id="Operations">Manage all <span id="HR">HR Operations</span> from the comfort of your home.</h2>
      </div>
      </div>
  
  
  )
}

export default loginpage
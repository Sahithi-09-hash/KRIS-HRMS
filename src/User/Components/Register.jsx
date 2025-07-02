import React from 'react'
import "./Register.css";
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className="container">
    <div className="left-panel">
      <div className="branding">
      <img src="/assets/logo.png" alt="Logo" className="logo" />
        <h2 id="head">HR Management Platform</h2>
        <p id="descrp">Manage all employees, payrolls, and other human <br/>resource operations.</p>
        <div className="buttons">
          <button className="learn-more">Learn More</button>
          <button className="features">Our Features</button>
        </div>
      </div>
    </div>
    
    <div className="right-panel">
      <h1>Welcome to KRIS</h1>
      <p className="subtitle">Register your account</p>
      
      <form className="register-form">
        <div className="form-row">
          <label className="form-label">First Name</label>
          <input type="text"/>
          <label className="form-label">Last Name</label>
          <input type="text"/>
          <label className="form-label">E-mail Address</label>
          <input type="email"/>
          </div>
        <div className="form-row1">
        <label className="form-label">Phone Number</label>
        <input type="text"/>
          <label className="form-label">Password</label>
          <input type="password" />
          <label className="form-label">Confirm Password</label>
          <input type="password" />
        </div>

        <div className="checkboxes">
          <label>
            <input type="checkbox" /> Yes, I want to receive KRIS newsletters
          </label>
          <label>
            <input type="checkbox" /> I agree to all the <a href="#">Terms, Privacy Policy</a>
          </label>
        </div>
      <Link to="/user/Loginpage"><button className="create-account">Create Account</button></Link>

        <p className="login-link">
          Already have an account? <Link to="/user/Loginpage"><a href="#">Log In</a></Link>
        </p>
      </form>
    </div>
  </div>
  )
}
export default Register
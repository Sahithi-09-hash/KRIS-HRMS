import React from 'react'
import { Link } from 'react-router-dom';
import "./Homepage.css";  

const Homepage = () => {
  return (
    <div className="homepage-background">
    <div className="Home">
      <img src="./assets/logo.png" alt="Logo" className="Icon" />
       <Link to="/admin/login"><button id="adminhome">ADMIN</button></Link>
       <Link to="/user/register"><button id="user">USER</button></Link>
    </div>
    </div>
  )
}

export default Homepage
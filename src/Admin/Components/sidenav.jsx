import React from "react";
import { Link } from "react-router-dom";
import "./Sidenav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope,faBriefcase, faUserGroup,faFile,faUser,faBookOpen,faScaleBalanced,faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";   

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/assets/logo.png" alt="Logo" className="logokris" />
        <div id="profile">
          <img src="/assets/profile.png"  className="profile"/>
        <h3 id="krisadmin">KRIS Admin<br />
            <span id= "admin">Admin</span>
        </h3>
        </div>
        
      </div>
      <ul className="sidebar-menu">
        <p id="features">Features</p>
        <li>
          <Link to="/dashboard" className="active">
             Dashboard
          </Link>
        </li>
        <li>
          <Link to="/messages">
          <FontAwesomeIcon icon={faEnvelope} className="icon" /> Messages <span className="badge">9+</span></Link>
        </li>
        <p id="features">Recruitment</p>
        <li>
          <Link to="/jobs">
          <FontAwesomeIcon icon={faBriefcase} className="icon" /> Jobs</Link>
        </li>
        <li>
          <Link to="/candidates"> 
          <FontAwesomeIcon icon={faUserGroup} className="icon" />Candidates</Link>
        </li>
        <li>
          <Link to="/resumes">
          <FontAwesomeIcon icon={faFile} className="icon" />Resumes</Link>
        </li>
        <p id="features">Organisation</p>
        <li>
          <Link to="/employee-management">
          <FontAwesomeIcon icon={faUser} className="icon" />Employee Management</Link>
        </li>
        <li>
          <Link to="/leave-management"> 
          <FontAwesomeIcon icon={faBookOpen} className="icon" />Leave Management</Link>
        </li>
        <li>
          <Link to="/admin/performance-management">
          <FontAwesomeIcon icon={faScaleBalanced} className="icon" />Performance Management</Link>
        </li>
        <p id="features">Krispay</p>
        <li>
          <Link to="/payroll">
          <FontAwesomeIcon icon={faMoneyBillWave} className="icon" />Payroll Management</Link>
        </li>
      </ul>
      <button className="logout-btn">Log Out</button>
      
      </div>
    
  );
  
};
export default Sidebar;
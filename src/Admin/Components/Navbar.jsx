import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faWrench, faEnvelopeCircleCheck, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div style={{ display: "flex" }}>

      <div style={{ flex: 1 }}>
        <div id="dashboard-container">
          <div className="top-bar">
            <button className="menu-btn">
              <FontAwesomeIcon icon={faBars} id="Bars" />
            </button>
            <div>
              <button id="candid">All Candidates</button>
              <input type="text" className="search-bar" placeholder="Search..." id="search" />
              <FontAwesomeIcon icon={faSearch} id="searchicon" />
            </div>
            <div id="top-icons">
              <span className="icontop" id="Bell"><FontAwesomeIcon icon={faBell} /></span> 
              <span className="icontop" id="Tool"><FontAwesomeIcon icon={faWrench} /></span>
              <span className="icontop" id="circle"><FontAwesomeIcon icon={faEnvelopeCircleCheck} /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell,  faEnvelopeCircleCheck,faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
        <div className="header">
            <div>
              <img src="/assets/krislogo.png" alt="Logo" id="icon" />
            </div>
            <div className="header-text">
              <ul>
                <Link to='/admin/Dashboard' >
                <li id="adminlink">Dashboard</li>
                </Link>
                <li>Requests</li>
                <li>Payroll</li>
                <li>Company</li>
                <li>Extras</li>
              </ul>
            </div>
            <div className="top-icons1">
              <span className="icontop1" id="fabell"><FontAwesomeIcon icon={faBell} /></span> 
              <span className="icontop1" id="faMsg">< FontAwesomeIcon icon={faEnvelopeCircleCheck}/></span>
              <span className="icontop1" id="fauser"><FontAwesomeIcon icon={faUser}/></span>
            </div>
          </div>
        </div>
  );
};
export default Header;                  
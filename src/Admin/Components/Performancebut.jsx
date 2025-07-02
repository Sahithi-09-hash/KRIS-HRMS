import React from 'react'
import { Link } from "react-router-dom";
import './performancebut.css';

const Performancebut = () => {
  return (
   
    <div id="managebox">
        <h2>Performance Mamagement</h2>
        <div id="manage">
          <Link to="/admin/performance-management/target-setup">
          <button id="target">Target Setup</button>
          </Link>
          <Link to="/admin/performance-management/target">
          <button>Target</button>
          </Link>
          <button> Appraisals</button>
          <button>Settings</button>
          <button>Reports</button>
        </div>
      </div>
  )
}

export default Performancebut
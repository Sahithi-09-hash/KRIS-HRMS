import React from 'react'
import Performancebut from '../Components/Performancebut';
import Sidenav from '../Components/sidenav';
import Navbar from '../Components/Navbar';
import './performance.css';


const perfomancemanagement = () => {
  return (
    <div id="dashback">
      <Sidenav />
      <Navbar />
      <Performancebut/> 
      <div id="stats">
        <div id="performancemanager">
          <div>
            <h2 id="all">Manage All <span id="applicat"> Performance</span></h2>
            <p id="relax">A relaxed employee is a performing employee</p>
          </div>
          <div>
            <img src="/performance.png" alt="Performance Management" id="adminleave" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default perfomancemanagement
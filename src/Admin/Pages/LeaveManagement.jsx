import React from 'react';
import './LeaveManagement.css';
import Sidenav from '../Components/Sidenav';
import Navbar from '../Components/Navbar';
import Adminheader from "../Components/Adminheader";

function LeaveManagement() {
  return (
      <div id="dashback">
      <Sidenav />
      <Navbar/>
            <div id="stats">
                  <Adminheader />
                   <div id="perform">
                    <div>
                      <h2 id="all">Manage All <span id="applicat"> Leave Applications</span></h2>
                      <p id="relax">A relaxed employee is a performing employee</p>
                    </div>
                    <div>
                     <img src="/assets/leave.png" alt="Leave Management" id="adminleave" />
                    </div>
                   </div>
              </div>
            </div>
  );
}

export default LeaveManagement;
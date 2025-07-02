import React from 'react'
import { Link } from 'react-router-dom';
import Header from './../../User/Components/Header'
import "./userdashboard.css"

const userDashboard = () => {
  return (
    <div>
    <Header/>
    <div className="back">
    <h2 id="board">Dashboard</h2>
      <div>
      <div id="bluebox">
              <img src="/assets/profile.png"  id="person" />
              <h2 id="name">John Doe<br/>
              <span id="role">UI/UX Designer & UX Writer</span></h2>
              <button id="editprofile">Edit Profile</button>
       </div>
       <p id="actions">Quick Actions</p>
       <div id="actionsbox">
           <Link to='/user/leaveapp'>
           <button id="but1">
            Apply for Leave
            </button>
            </Link>
          <button>KPI Goals</button>
          <button>Take Appraisal</button>
          <button>View Payslip</button>
          <Link to='/user/updateprofile'>
          <button>Update Profile</button>
          </Link>
          <button>Events</button>
       </div>
       </div>
    </div>
    </div>
  )
}

export default userDashboard
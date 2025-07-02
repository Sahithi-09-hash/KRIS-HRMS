import React from 'react'
import Performancebut from '../Components/Performancebut';
import Sidenav from '../Components/sidenav';
import Navbar from '../Components/Navbar';
import './targetsetup.css';
const Targetsetup = () => {
  return (
   <div id="dashback">
      <Sidenav />
      <Navbar />
      <Performancebut/>  
      <div id="targetsetup">
        <div id="form1">
          <div>
            <label>Title</label>
            <input type="text"/>
          </div>
          <div>
          <label>KPI Weight</label>
            <input type="text"/>
          </div>
        </div>
        <div id="form2">
            <label>Description</label>
            <input type="text"/>
          </div>
          <div id="form2">
            <label>Employees</label>
            <input type="text"/>
          </div>
          <div id="form1">
            <div>
              <label>Start Date</label>
              <input type="date"/>
            </div>
            <div>
              <label>End Date</label>
              <input type="date"/>
          </div>
      </div> 
       <div id="form-buttons">
            <button id="sub">Submit</button>
            <button id="more">Add More Targets</button>
        </div>
    </div>
    </div>
  )
}

export default Targetsetup;
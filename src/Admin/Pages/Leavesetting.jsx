import React from 'react';
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import Adminheader from '../Components/Adminheader';
import './leavesettings.css';
import { useForm } from "react-hook-form";

const Leavesetting = () => {

  return (
    <div id="dashback">
      <Sidenav />
      <Navbar />
      <div id="starter">
        <Adminheader />
        <div id="form-fields">
          <div id="left-part">
           <h3>Create Leave Settings</h3>
           <div id="leaveform1">
            <div>
              <label>Leave Plan Name</label>
              <select>
                <option value="annual">Annual Leave</option>
                <option value="sick">Sick Leave</option>
                <option value="maternity">Maternity Leave</option>
                <option value="compassionate">Compassionate Leave</option>
              </select>
            </div>
            <div>
              <label>Duration (days)</label>
              <input type="number" placeholder="Enter duration in days" />
            </div>
           </div>
           <div id="leaveform2">
            <label>Do you want to activate Leave Reacll for this plan</label>
            <select>
              <option value="yes">Reacall</option>
              <option value="no">Autorenew</option>
            </select>
           </div>
           <div id="leaveform3">
            <div>
              <label>Would you like to activate leave bonus</label>
              <input type="text"></input>
            </div>
            <div>
              <label>How much percentage of leave bonus?</label>
              <input type="number" placeholder="percentage(%)" />
            </div>
           </div>
           <div id="leaveform2">
            <label>Select Leave Allocation</label>
            <input type="text"/>
           </div>
           <div id="leaveform4">
            <label>Reason for Recall</label>
            <input type="text"/>
           </div>
           <button id="subbut">submit</button>
          </div>
          <div id="right-part">
            <h1>Follow</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Leavesetting;

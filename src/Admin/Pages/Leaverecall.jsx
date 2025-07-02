import React from 'react'
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";
import Adminheader from "../Components/Adminheader";

const Leaverecall = () => {
  return (
     <div id="dashback">
      <Sidenav />
      <Navbar/>
            <div id="stats">
                  <Adminheader />
                  <h1>LeaveRecall</h1>
            </div>
        </div>
  )
}

export default Leaverecall
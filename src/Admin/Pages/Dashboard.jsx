import React from "react";
import "./Dashboard.css";
import Sidenav from "../Components/Sidenav";
import Navbar from "../Components/Navbar";




const Dashboard = () => {
  return (
     <div id="dashback">
      <Sidenav />
      <Navbar/>
      <div id="stats">
                  <h1>Dashboard</h1>
            </div>
      </div>
  );
};

export default Dashboard;

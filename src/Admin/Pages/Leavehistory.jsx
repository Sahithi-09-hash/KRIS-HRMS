import React, { useState, useEffect } from "react";
import Sidenav from "../Components/sidenav";
import Navbar from "../Components/Navbar";
import Adminheader from "../Components/Adminheader";
import "./leavehistory.css"; 

const Leavehistory = () => {
    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
        const fetchLeaves = async () => {
            try {
                const res = await fetch("http://localhost:3000/leaves"); 
                if (!res.ok) throw new Error("Network response was not ok");
                const data = await res.json();
                setLeaves(data);
            } catch (err) {
                console.error("Fetch error:", err.message);
                setLeaves([]);
            }
        };
        fetchLeaves();
    }, []);
    return (
        <div id="dashback">
            <Sidenav />
            <Navbar />
            <div id="stats">
                <Adminheader />
                <div className="leave-history-container">
                    <div className="leave-container">
                        <h2 className="leave-title">Leave History</h2>
                        <table className="leave-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Type</th>
                                    <th>Reason</th>
                                </tr>
                            </thead>
                           <tbody>
              {leaves.map((leaves,index)=>(
              <tr key={leaves.id}>
              <td className="admin-lhtdata">{leaves.id}</td>
              <td className="admin-lhtdata">{leaves.name}</td>
              <td className="admin-lhtdata">{leaves.duration}</td>
              <td className="admin-lhtdata">{leaves.startDate}</td>
              <td className="admin-lhtdata">{leaves.endDate}</td>
              <td className="admin-lhtdata">{leaves.type}</td>
              <td className="admin-lhtdata">{leaves.reason}</td>
              <td className="admin-lhtdata">
                <select className="admin-lh3btn">
                  <option value="">Actions</option>
                  <option value="Approve">Approve</option>
                  <option value="Decline">Decline</option>
                  <option value="View Details">View Details</option>
                  <option value="Extension">Extension</option>
                </select>
              </td>
            </tr>
              ))}
            
          </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leavehistory;

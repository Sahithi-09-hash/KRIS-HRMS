import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faBookOpen} from "@fortawesome/free-solid-svg-icons";
import "./adminheader.css";
import { Link } from 'react-router-dom';

const Adminheader = () => {
  return (
    <div>
 <h3 id="management"><FontAwesomeIcon icon={faBookOpen} className="icon" />Leavemanagement</h3>
                   <li id="setting">
                    <Link to ="/admin/leavesetting">
                   <button id="call">LeaveSettings</button>
                   </Link>
                   <Link to ="/admin/leaverecall">
                   <button>Leave Reacall</button>
                   </Link>
                    <Link to ="/admin/leavehistory">
                   <button>Leave History</button>
                    </Link>
                    <Link to ="/admin/reliefofficers">
                   <button>Relief Officers</button>
                    </Link>
                   </li>
                   </div>
  )
}

export default Adminheader
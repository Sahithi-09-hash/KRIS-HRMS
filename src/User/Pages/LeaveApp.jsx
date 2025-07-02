import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './../../User/Components/Header'
import "./leaveapp.css"
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";


const LeaveApp = () => {
    
        return (
            <div>
                <Header />
                <div id="background">
                    <br />
                    <div id="box">
                        <p id="leavepage">
                            <span id="boardleave">
                                Dashboard   &gt; Apply for leave
                            </span>
                        </p>
                    </div>
                    <div id="mainbox">
                        <br />
                        <h2>
                            <span id="faopen"><FontAwesomeIcon icon={faBookOpen} id="open" />
                                Leave Application
                            </span>
                        </h2>

                        <div id="maincard">
                            <div className='leavecard'>
                                <h4 className='leavetext'> Annual Leave</h4>
                                <Link to='/user/annual'>
                                    <button className='apply'>
                                        Apply
                                    </button></Link>
                            </div>
                            <div className='leavecard'>
                                <h4 className='leavetext'>  Sick Leave</h4>
                                <Link to='/user/sick'>
                                    <button className='apply'>
                                        Apply
                                    </button>
                                </Link>
                            </div>
                            <div className='leavecard'>
                                <h4 className='leavetext'> Maternity Leave</h4>
                                <Link to='/user/maternity'>
                                    <button className='apply'>
                                        Apply
                                    </button>
                                </Link>
                            </div>
                            <div className='leavecard'>
                                <h4 className='leavetext'>Compassionate Leave</h4>
                                <Link to='/user/compassionate'>
                                    <button className='apply'>
                                        Apply
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div id="history">
                            <div>
                                <h2 id="actions">Leave history</h2>
                            </div>
                            <div>
                                <button id="filter">Filter</button>
                                <button id="export">Export</button>
                            </div>
                        </div>
                        <div>
                            <table className="leave-table">
                                <thead>
                                    <tr>
                                        <th>Name(s)</th>
                                        <th>Duration(s)</th>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                        <th>Type</th>
                                        <th>Reason(s)</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr>
                                            <td>name</td>
                                            <td>duration</td>
                                            <td>starrt</td>
                                            <td>end</td>
                                            <td>type</td>
                                            <td>reason</td>
                                            <td>
                                                <button>
                                                    Actions <span className="eye-icon">👁️</span>
                                                </button>
                                            </td>
                                        </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </div>

            </div >
        )
    }

    export default LeaveApp
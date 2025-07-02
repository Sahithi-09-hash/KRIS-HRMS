import React from 'react'
import Header from './../../User/Components/Header'
import Updatesidenav from '../Components/Updatesidenav'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import "./Personaldetails.css"

const Personaldetails = () => {
    return (
    <div>
    <Header/>
    <div >
    <div id="employee">
    <Updatesidenav/>
    <div id="employeeprofile"> 
    <button id="edit"> 
      <FontAwesomeIcon icon={faPenToSquare}  id="pen"/><br/>
     Edit</button> 
     <div>
        <img src="/assets/profile.png"  id="updatepic"/>
     </div>  
     <p  id="empname">Employee Name</p>  
     <h4 id="empname1">John Doe Francis</h4>
     <p id="empnam">Department</p>  
     <h4 id="empname1">Design & Marketing</h4>
     <div id="jobdetails">
        <div id="jobdetails1">
            <p>Job Title</p>
            <h4>UI/UX Designer</h4>
        </div>
        <div id="jobdetails2">
             <p>Job Category</p>
             <h4>Full time</h4>
        </div>
     </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Personaldetails
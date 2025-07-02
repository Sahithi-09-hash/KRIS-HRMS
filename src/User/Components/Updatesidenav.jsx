import React from 'react'
import { Link } from 'react-router-dom';
import "./updatesidenav.css"


const Updatesidenav = () => {
  return (
    <div id="Detailsprofile">
      <br/>
            <p id="leavepage" ><span id="boardleave">Dashboard &gt; Update Profile</span></p>
        <div>
            <div id="detailbuttons">
                <Link to="/Personaldetails">
                <button id="personal">Personal Details</button>
                </Link>
                <Link to="/Contactdetails">
                <button id="personal">Contact Details</button>
                </Link>
                <Link to="/Kindetails">
                <button id="personal">Next of kin Details</button>
                </Link>
                <Link to="/Educationdetails">
                <button id="personal">Educational Details</button>
                </Link>
                <Link to="/Gurantordetails">
                <button id="personal">Guarantor Details</button>
                </Link>
                <Link to="/Familydetails">
                <button id="personal">Family Details</button>
                </Link>
                <Link to="/Jobdetails">
                <button id="personal">Job Details</button>
                </Link>
                <Link to="/Financialdetails">
                <button id="personal">Financial Details</button>   
                </Link>  
            </div>
        </div>
     </div>
  )
}

export default Updatesidenav
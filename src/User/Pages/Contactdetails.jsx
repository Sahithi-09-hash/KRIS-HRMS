import React from 'react';
import Header from '../Components/Header'
import Updatesidenav from '../Components/Updatesidenav'
import "./Contactdetails.css"



const Contactdetails = () => {
 
  return (
    <div>
       < Header/>
      <div id="employee">
        <div>
       <Updatesidenav/>
       </div>
      <div id="employeeprofile">
           <div id="contact">
          <div id="contact1">
            <label id="phnnumber1">Phone Number1</label><br/>
            <input type="text" placeholder="Enter Phone Number 1" id="phone1"/>
          </div>
          <div id="contact2">
            <label>Phone Number2</label><br/>
            <input type="text" placeholder="Enter Phone Number 2" id="phone1"/>
          </div>
        </div>  
        <div id="contact1">
            <label>E-mail Address</label><br/>
            <input type="text" placeholder="Enter Email"id="phone2"/>
        </div>
        <div id="contact">
         <div id="contact1">
            <label>State of residence</label><br/>
            <input type="text" placeholder="Enter Address" id="phone1"/>
          </div>
          <div id="contact2">
            <label>City</label><br/>
            <input type="text" placeholder="Enter City" id="phone1"/>
          </div>
        </div>
        <div id="contact1">
          <label >Resedential Address</label><br/>
          <input type="text" placeholder="Enter Address" id="phone3"/>
        </div>
        <button id="update">
          Update
        </button>
      </div>
      </div>
    </div>
  )
}

export default Contactdetails
import React from 'react'
import Header from '../Components/Header'
import Updatesidenav from '../Components/Updatesidenav'
import "./Kindetails.css"

const Kindetails = () => {
  return (
    <div>
      <Header/>
      <div id="employee">
      <div>
      <Updatesidenav/>
      </div>
      <div id="employeeprofile">
        <div id="kindetail">
          <div id="kinmeme1">
            <label>Next of Kin neme</label><br/>
            <input type="text" placeholder='John Doe Samson' id="John"/>
          </div>
          <div id="kinmeme2">
            <label>Job/Operartion</label><br/>
            <input type="text" placeholder='IT Manager' id="John"/>
          </div>
        </div>
        <div id="kindetail">
          <div id="kinmeme1">
            <label>Phone Number</label><br/>
            <input type="number" placeholder='081200000000' id="John"/>
          </div>
          <div id="kinmeme2">
            <label>Relationship</label><br/>
            <input type="text" placeholder='Relative' id="John"/>
          </div>
        </div>
        <div id="kinmeme1">
        <label>Residential Address</label><br/>
        <input type="text" placeholder='18 Junction Site Lekki' id="Site"/>
        </div>
         <button id="updatebutn">Update</button>
      </div>

    </div>
    </div>
  )
}

export default Kindetails
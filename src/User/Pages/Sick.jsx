import React, { useState }  from 'react'
import Header from './../../User/Components/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen} from "@fortawesome/free-solid-svg-icons"; 
import PopupModal from './popup'


const Sick = () => {
     const [showPopup, setShowPopup] = useState(false);
          
            const handleSubmit = (e) => {
              e.preventDefault();
              setShowPopup(true);
            };
  return (
   <div>
    <Header/>
     <div id="ground">
            <br/>
            <div>
                <p id="leavepag"><span id="boardleave">Dashboard &gt; Apply for Leave &gt; Sick Leave</span></p>
            </div>
            <div className="leaveform">
               <div className='leavehead' >
                <br/>
                <h2 className='cation'> <FontAwesomeIcon icon={faBookOpen} id="open" />Leave Application</h2>
                <p id="fields">Fill the required fields below to apply for sick leave.</p>
                </div>
                <form onSubmit={handleSubmit} className="leave-form">
                <div className='leaveform1'>
                    <label id="leaveform1label">Leave Type</label>
                    <input type="text" id="leavetype" value="sick Leave" />
                </div>
                <div className='leaveform2'>
                    <div>
                    <label id="leaveform2label"> Start Date</label>
                    <br/>
                    <input type="date" id="duration" required/>
                    </div>
                    <div className='leaveform0'>
                    <label id="leaveform2label">End Date</label>
                    <br/>
                    <input type="date" id="duration" required/>
                    </div>
                </div>
                <div   className='leaveform2'>
                    <div>
                    <label id="leaveform2label"> Duration</label>
                    <br/>
                    <input type="text" id="duration" value="60"/>
                    </div>
                    <div className='leaveform0'>
                    <label id="leaveform2label">Resumption Date</label>
                    <br/>
                    <input type="date" id="duration"/>
                    </div>
                </div>
                <div className='leaveform3'>
                <label id="reasonfor"> Reason for leave</label>
                <textarea id="reason" rows="4" cols="50" placeholder="Enter your reason here..."></textarea>
                </div>
                <div className='leaveform3'>
                <label id="handover">Attach handover document(pdf,jpg,docx or any other format)</label>
                <input type="file" id="file" accept=".pdf, .jpg, .docx" required/>
                </div>
                <div className='leaveform1'>
                <label id="chooseofficer">Choose Relief Officer</label>
                <select id="reliefofficer" required>
                    <option value="Select Relief Officer" className='selectrelief'>Select Relief Officer</option>
                    <option value="officer1" className='selectrelief'>Officer 1</option>
                    <option value="officer2" className='selectrelief'>Officer 2</option>
                    <option value="officer3" className='selectrelief'>Officer 3</option>
                    <option value="officer4" className='selectrelief'>Officer 4</option>     
                </select> 
                </div>
                <button id="submit">Submit</button>
                {showPopup && <PopupModal onClose={() => setShowPopup(false)} />}
                <button id="reset">Reset</button>
                </form>
                </div> 
            </div>
  

   </div>
   
  )
}

export default Sick
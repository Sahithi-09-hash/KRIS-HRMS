import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Home/Homepage";
import Login from "./Admin/Pages/Login";
import Register from "./User/Components/Register";
import Dashboard from "./Admin/Pages/Dashboard";
import LeaveManagement from "./Admin/Pages/LeaveManagement";
import Loginpage from "./User/Pages/loginpage";
import UserDashboard from "./User/Pages/Userdashboard";
import LeaveApp from "./User/Pages/LeaveApp";
import Annual from "./User/Pages/Annual";
import Sick from "./User/Pages/Sick";
import Maternity from "./User/Pages/Maternity";
import Compassionate from "./User/Pages/Compassionate";
import Updateprofile from "./User/Pages/Updateprofile";
import Personaldetails from "./User/Pages/Personaldetails";
import Contactdetails from "./User/Pages/Contactdetails"; 
import Kindetails from "./User/Pages/Kindetails";
import Educationdetails from "./User/Pages/Educationdetails";
import Familydetails from "./User/Pages/Familydetails";
import Gurantordetails from "./User/Pages/Gurantordetails";
import Financialdetails from "./User/Pages/Financialdetails";
import Jobdetails from "./user/pages/Jobdetails";
import Leavesetting from "./Admin/Pages/Leavesetting";
import Leavehistory from "./Admin/Pages/Leavehistory";
import Leaverecall from "./Admin/Pages/Leaverecall";
import ReliefOfficers from "./Admin/Pages/Reliefofficers";
import Perfomancemanagement from "./Admin/Performance/Perfomancemanagement";
import Targetsetup from "./Admin/Performance/Targetsetup";
import Target from "./Admin/Performance/Target";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user/register" element={<Register/>} />
        <Route path="/user/loginpage" element={<Loginpage />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/user/leaveapp" element={<LeaveApp />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/user/annual" element={<Annual/>} />
        <Route path="/user/sick" element={<Sick/>} />
        <Route path="/user/maternity" element={<Maternity/>} />
        <Route path="/user/compassionate" element={<Compassionate/>} />
        <Route path="/user/updateprofile" element={<Updateprofile />} />
        <Route path="/Personaldetails" element={<Personaldetails/>}/>
        <Route path="/contactdetails" element={<Contactdetails />} />
        <Route path="/kindetails" element={<Kindetails/>} />
        <Route path="/educationdetails" element={<Educationdetails/>} />
        <Route path="/familydetails" element={<Familydetails/>}/>
        <Route path="/gurantordetails" element={<Gurantordetails/>}/>
        <Route path="/financialdetails" element={<Financialdetails/>}/>
        <Route path ="/jobdetails" element={<Jobdetails/>}/>
               
        <Route path="/admin/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leave-management" element={<LeaveManagement />} />
        <Route path="/admin/performance-management" element={<Perfomancemanagement />} />
        <Route path="/admin/leavesetting" element={<Leavesetting />} />
        <Route path="/admin/leaverecall" element={<Leaverecall />} />
        <Route path="/admin/leavehistory" element={<Leavehistory />} />
        <Route path="/admin/reliefofficers" element={<ReliefOfficers />} />
        <Route path="/admin/performance-management/target-setup" element={<Targetsetup />} />
        <Route path="/admin/performance-management/target" element={<Target />} />
      </Routes>
    </Router>
  );
};

export default App;

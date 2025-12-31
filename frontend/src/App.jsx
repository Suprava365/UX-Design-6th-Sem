
import './App.css'
import About from './components/about/About'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import {Routes , Route} from 'react-router-dom'
import Service from './components/service/Service'
import Contact from './components/contact/Contact'
import UserDashboard from './components/user dashboard/User_dashboard'
import UserAppointments from './components/user appointment/User_appointment'
import UserHistory from './components/user history/User_history'
import UserLabReports from './components/user lab report/UserLabReports'
import UserSettings from './components/user setting/UserSettings'
import AdminDashboard from './components/admin dashboard/AdminDashboard'
import AdminPatients from './components/admin patient/AdminPatients'
import AdminAppointments from './components/admin appointment/AdminAppointments'
import AdminDoctors from './components/admin doctor/AdminDoctors'
import AdminStaff from './components/admin staff/AdminStaff'
import AdminLabReports from './components/admin lab report/AdminLabReports'
import AdminSettings from './components/admin setting/AdminSettings'
import AddNewPatient from './components/admin add new patient/AddNewPatient'
import AddNewAppointment from './components/add new appointment/AddNewAppointment'



function App() {


  return (
    <>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user_dashboard" element={<UserDashboard />} />
      <Route path="/user_appointment" element={<UserAppointments/>} />
      <Route path="/user_history" element={<UserHistory/>} />
      <Route path="/lab_report" element={<UserLabReports/>} />
      <Route path="/user_settings" element={<UserSettings/>} />
      <Route path="/admin_dashboard" element={<AdminDashboard/>} />
      <Route path="/admin_patient" element={<AdminPatients/>} />
       <Route path="/admin_appointment" element={<AdminAppointments/>} />
       <Route path="/admin_doctor" element={<AdminDoctors/>} />
       <Route path="/admin_staff" element={<AdminStaff/>} />
       <Route path="/admin_lab_report" element={<AdminLabReports/>} />
       <Route path="/admin_setting" element={<AdminSettings/>} />
       <Route path="/add_new_patient" element={<AddNewPatient/>} />
        <Route path="/add_new_appointment" element={<AddNewAppointment/>} />
      {/* //routes push  */}
      
      
          </Routes>
    
    </>
  )
}

export default App


import './App.css'
import About from './components/about/About'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import {Routes , Route} from 'react-router-dom'
import Service from './components/service/Service'
import Contact from './components/contact/Contact'
import UserDashboard from './components/user/user dashboard/User_dashboard'
import UserAppointments from './components/user/user appointment/User_appointment'
import UserHistory from './components/user/user history/User_history'
import UserLabReports from './components/user/user lab report/UserLabReports'
import UserSettings from './components/user/user setting/UserSettings'


import AdminLayout from './layout/AdminLayout'
import AdminOverview from './pages/admin/AdminOverview'
import AdminPatients from './pages/admin/AdminPatients'
import AdminDoctors from './pages/admin/AdminDoctors'
import AdminStaff from './pages/admin/AdminStaff'
import AdminLabReports from './pages/admin/AdminLabReports'
import AdminSettings from './pages/admin/AdminSettings'
import AdminAppointments from './pages/admin/AdminAppointments'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'
import UserLayout from './layout/UserLayout'



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
      {/* <Route path="/admin_dashboard" element={<AdminDashboard/>} />
      <Route path="/admin_patient" element={<AdminPatients/>} />
       <Route path="/admin_appointment" element={<AdminAppointments/>} />
       <Route path="/admin_doctor" element={<AdminDoctors/>} />
       <Route path="/admin_staff" element={<AdminStaff/>} />
       <Route path="/admin_lab_report" element={<AdminLabReports/>} />
       <Route path="/admin_setting" element={<AdminSettings/>} />
       <Route path="/add_new_patient" element={<AddNewPatient/>} />
      <Route path="/add_new_appointment" element={<AddNewAppointment/>} />
        <Route path="/add_new_doctor" element={<AddNewDoctor/>} />
        <Route path="/add_new_staff" element={<AddNewStaff/>} />
        <Route path="/add_new_labreport" element={<AddLabReport/>} /> */}
        {/* <AuthProvider> */}

 <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminOverview />} />
          <Route path="patient" element={<AdminPatients />} />
          <Route path="appointment" element={<AdminAppointments />} />
          <Route path="doctors" element={<AdminDoctors />} />
          <Route path="staff" element={<AdminStaff />} />
          <Route path="lab-reports" element={<AdminLabReports />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

           {/* <Route element={<ProtectedRoute allowedRole="user" />}> */}
            <Route path="/user" element={<UserLayout />}>
              <Route index element={<UserDashboard />} />
              <Route path="appointments" element={<UserAppointments />} />
              <Route path="lab-reports" element={<UserLabReports />} />
              <Route path="history" element={<UserHistory />} />

              <Route path="settings" element={<UserSettings />} />
            </Route>
          {/* </Route> */}
        {/* </AuthProvider> */}
        
      {/* //routes push  */}
      
      
          </Routes>
    
    </>
  )
}

export default App

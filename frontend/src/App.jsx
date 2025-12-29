
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
      {/* //routes push  */}
      
      
          </Routes>
    
    </>
  )
}

export default App

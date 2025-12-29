
import './App.css'
import About from './components/about/About'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import {Routes , Route} from 'react-router-dom'
import Service from './components/service/Service'
import Contact from './components/contact/Contact'
import UserDashboard from './components/user dashboard/User_dashboard'
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
      <Route path="/user_appointment" element={<User_appointment/>} />
      <Route path="/user_history" element={<User_history/>} />



      {/* service page banyesi yp page ma yha regioster gareko khai tw ? */}
      
      
      
          </Routes>
    
    </>
  )
}

export default App

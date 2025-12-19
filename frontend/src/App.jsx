
import './App.css'
import About from './components/about/About'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import {Routes , Route} from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
    </Routes>
    
    </>
  )
}

export default App

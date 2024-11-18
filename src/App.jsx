import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import User from './components/User'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'
import AdminDashboard from './admin/AdminDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
   <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/user" element={<User/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/admindashboard" element={<AdminDashboard/>} />
          
      </Routes>
    </>
  )
}

export default App

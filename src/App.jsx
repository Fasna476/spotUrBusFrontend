import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import User from './components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
   <Routes>
          <Route path="/user" element={<User/>} />
          
      </Routes>
    </>
  )
}

export default App

import "./CSS/LoginSignup.css"
import "./CSS/App.css"
import "./CSS/index.css"
import SignupForm from './Components/SignupForm'
import LoginForm from './Components/LoginForm'
import HomePage from "./Components/HomePage"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import React from "react"

// import LoginSignup from "./Components/LoginSignup"



function App() {

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/homepage" element={<HomePage />} />
      {/* ... other routes ... */}
    </Routes>
  </Router>
    </>
  )
}

export default App

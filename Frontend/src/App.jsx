import SignupForm from './Components/SignupForm'  
import "./CSS/LoginSignup.css"
import "./CSS/App.css"
import "./CSS/index.css"
import LoginForm from './Components/LoginForm'
import HomePage from "./Components/HomePage"
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import React from "react"
import ContactUs from "./Components/ContactUs"

// import LoginSignup from "./Components/LoginSignup"



function App() {

  return (
    <>
    
      <Router>
      <Routes>
        <Route path="/" element={<ContactUs />} />
  {/*<Route path="/homepage" element={<HomePage />} />*/}
        {/* ... other routes ... */}
      </Routes>
    </Router>
    </>
    )
  }

export default App

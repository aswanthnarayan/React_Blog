import React, { useState } from 'react'
import "./App.module.scss"
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import SinglePostPage from './Pages/SinglePostPage/SinglePostPage'
import WritePage from './Pages/WritePage/WritePage'
import Profile from './Pages/ProfilePage/Profile'
import LoginPage from './Pages/LoginPage/LoginPage'
import Register from './Pages/RegisterPage/Register'
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import About from './Pages/AboutPage/About'


const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  return (
   
    <Router>
    <Navbar/>
    <Routes>
      {/* <Route exact path="/" element={<HomePage />} /> */}
      <Route
          exact
          path="/"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />}
        />
      <Route path="/login" element={<LoginPage setisLoggedIn={setisLoggedIn} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/post" element={<WritePage />} />
      <Route path="/post/:postId" element={<SinglePostPage />} />
    </Routes>
  </Router>
  )
}

export default App

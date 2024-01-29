import React, { useContext, useState } from 'react'
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
import { Context } from './context/Context'


const App = () => {
  const { user} = useContext(Context);

  return (
   
    <Router>
    <Navbar />
    <Routes>
      {/* <Route exact path="/" element={<HomePage />} /> */}
      <Route
          exact
          path="/"
          element={<HomePage />}
        />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/about" element={!user ? <Navigate to="/" /> : <About />}  /> */}
      <Route path="/profile" element={!user ? <Navigate to="/" /> : <Profile />} />
      <Route path="/post" element={!user ? <Navigate to="/" /> : <WritePage />} />
      <Route path="/post/:postId" element={<SinglePostPage />} />
    </Routes>
  </Router>
  )
}

export default App

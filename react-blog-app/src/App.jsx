import React from 'react'
import "./App.module.scss"
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import SinglePostPage from './Pages/SinglePostPage/SinglePostPage'
import WritePage from './Pages/WritePage/WritePage'
import Profile from './Pages/ProfilePage/Profile'
import LoginPage from './Pages/LoginPage/LoginPage'
import Register from './Pages/RegisterPage/Register'


const App = () => {
  return (
   <>
   <Navbar/>
   {/* <HomePage/> */}
   {/* <SinglePostPage/> */}
    {/* <WritePage/> */}
  {/* <Profile/> */}
  {/* <LoginPage/> */}
  <Register/>
   </>
  )
}

export default App

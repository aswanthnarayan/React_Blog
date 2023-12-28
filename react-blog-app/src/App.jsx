import React from 'react'
import "./App.module.scss"
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import SinglePostPage from './Pages/SinglePostPage/SinglePostPage'
import WritePage from './Pages/WritePage/WritePage'


const App = () => {
  return (
   <>
   <Navbar/>
   {/* <HomePage/> */}
   {/* <SinglePostPage/> */}
    <WritePage/>
   </>
  )
}

export default App

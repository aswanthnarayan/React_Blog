import React from 'react'
import "./App.module.scss"
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import SinglePostPage from './Pages/SinglePostPage/SinglePostPage'

const App = () => {
  return (
   <>
   <Navbar/>
   {/* <HomePage/> */}
   <SinglePostPage/>
   </>
  )
}

export default App

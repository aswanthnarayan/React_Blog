import React from 'react'
import styles from './HomePage.module.scss'
import Home from '../../Components/Home/Home'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/SideBar/Sidebar'

const HomePage = () => {
  return (
    <>
    <Home/>
    <div className={styles.homePage}>
      <Posts/>
      <Sidebar/>
    </div>
    </>
  )
}

export default HomePage

import React from 'react'
import styles from './Home.module.scss'
import homeImage from '../../assets/background.jpeg'

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.heading}>
        <p className={styles.smHead}>React & Node</p>
        <p className={styles.bgHead}>Blog</p>
      </div>
      <img src={homeImage} alt="" />
    </div>
  )
}

export default Home

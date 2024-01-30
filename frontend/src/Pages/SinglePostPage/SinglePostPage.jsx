import React from 'react'
import styles from './SinglePostPage.module.scss'
import Sidebar from '../../Components/SideBar/Sidebar'
import SinglePost from '../../Components/SinglePost/SinglePost'

const SinglePostPage = () => {
  return (
    <div className={styles.SinglePostPage}>
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default SinglePostPage
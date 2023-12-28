import React from 'react'
import styles from './Profile.module.scss'
import postImg from '../../assets/singlepost.jpeg'
import Sidebar from '../../Components/SideBar/Sidebar'
import { CgProfile } from "react-icons/cg";



const Profile = () => {
  return (
    <div className={styles.profile}>
        <div className={styles.updateContainer}>
        <div className={styles.updateAccount}>
            <p>Update Your Account</p>
            <button>Delete Account</button>
        </div>
        <div className={styles.dpUpdate}>
            <img src={postImg} alt="newDp" />
            <label htmlFor="fileInput">
            <CgProfile className={styles.dpEdit}/>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
            />
        </div>
      
          <form className={styles.updateForm} action="">
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" id='username'/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id='email'/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id='password'/>
            <button className={styles.submitBtn} type='submit'>Update</button>
          </form>
     
        </div>
        <Sidebar/>
    </div>
  )
}

export default Profile
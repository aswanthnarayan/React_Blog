import React, { useContext, useState } from 'react'
import styles from './Profile.module.scss'
import postImg from '../../assets/singlepost.jpeg'
import Sidebar from '../../Components/SideBar/Sidebar'
import { CgProfile } from "react-icons/cg";
import { Context } from '../../context/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Profile = () => {
  const navigate = useNavigate()

  
  const {user,dispatch} = useContext(Context);
  const PF = "http://localhost:3300/uploads/";

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [success, setSuccess] = useState(false);

  const [file, setfile] = useState(null)


  const handleUserUpdate = async(e)=>{
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if(file){
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename)
      data.append('file', file);
      updatedUser.profilePic = filename
      try {
       await  axios.post('/api/upload',data) 
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const res =  await  axios.put(`/api/user/${user._id}`,updatedUser) 
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });

       // Update posts with the new username
       await axios.put(`/api/posts/user/${user.username}`, { newUsername: username });

      } catch (error) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
  }




  return (
    <div className={styles.profile}>
        <div className={styles.updateContainer}>
        <div className={styles.updateAccount}>
            <p>Update Your Account</p>
            <button >Delete Account</button>
        </div>
        <div className={styles.dpUpdate}>
            <img src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="newDp" />
            <label htmlFor="fileInput">
            <CgProfile className={styles.dpEdit}/>
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setfile(e.target.files[0])}/>
        </div>
      
          <form className={styles.updateForm} onSubmit={handleUserUpdate}>
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" id='username' placeholder={user.username} onChange={(e)=>setusername(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id='email' placeholder={user.email} onChange={(e)=>setemail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id='password' onChange={(e)=>setpassword(e.target.value)}/>
            <button className={styles.submitBtn} type='submit'>Update</button>
          </form>
          {success && (
            <span className={styles.updated} >
              Profile has been updated...
            </span>
          )}
        </div>
        <Sidebar/>
    </div>
  )
}

export default Profile;
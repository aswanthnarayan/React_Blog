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


  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:3300/uploads/";

  const [about, setabout] = useState(user.about || "")
  const [password, setpassword] = useState("")
  const [success, setSuccess] = useState(false);
  const [passCheck, setpassCheck] = useState(true);


  const [file, setfile] = useState(null)

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });


    //to check/validate password
    try {
      // Check if the entered current password matches the user's password in the database
      const isPasswordvalid = await axios.post(`/api/auth/${user._id}`, {
        password,
      });
      // console.log(isPasswordvalid);
      if (!isPasswordvalid.data.isValid) {
        setpassCheck(false)
        return;
      }
    } catch (error) {
      // Handle validation error
      // console.log(error);
      return;
    }

    const updatedUser = {
      userId: user._id,
      password,
    };
    //to avoid empty about after each update
    if (about) {
      updatedUser.about = about;
    }

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append('file', file);
      updatedUser.profilePic = filename;

      try {
        await axios.post('/api/upload', data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      const res = await axios.put(`/api/user/${user._id}`, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };




  return (
    <div className={styles.profile}>
      <div className={styles.updateContainer}>
        <div className={styles.updateAccount}>
          <p>Update Your Account</p>
          <button >Delete Account</button>
        </div>
        <div className={styles.dpUpdate}>
          <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="newDp" />
          <label htmlFor="fileInput">
            <CgProfile className={styles.dpEdit} />
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => setfile(e.target.files[0])} />
        </div>

        <form className={styles.updateForm} onSubmit={handleUserUpdate}>
          <label htmlFor="username">User Name</label>
          <input type="text" name="username" id='username' placeholder={user.username} disabled />
          <label htmlFor="about">About</label>
          <textarea name="about" id="about" cols="30" rows="10" value={about} onChange={(e) => setabout(e.target.value)}></textarea>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id='password' required onChange={(e) => setpassword(e.target.value)} />
          <button className={styles.submitBtn} type='submit'>Update</button>
        </form>
        {success ? (
          <span className={styles.updated} >
            Profile has been updated...
          </span>
        ) : !passCheck && (
          <span className={styles.updated} style={{ color: 'red' }}>
            Check your Password...
          </span>
        )}

      </div>
      {/* <Sidebar/> */}
    </div>
  )
}

export default Profile;
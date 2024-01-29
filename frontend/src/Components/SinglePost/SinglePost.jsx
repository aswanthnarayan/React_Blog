import React, { useContext, useEffect ,useState} from 'react'
import styles from './SinglePost.module.scss'
import postImg from '../../assets/singlepost.jpeg'
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Context } from '../../context/Context';




const SinglePost = () => {

  const navigate = useNavigate()
  const PF = "http://localhost:3300/uploads/";
  const {user} =useContext(Context);
  const location = useLocation();

  //states for fetch the post 
  const [singleP, setsingleP] = useState({})

  //states for edit the post 
const [updatedTitle, setupdatedTitle] = useState('');
const [updatedDesc, setupdatedDesc] = useState('');
const [updateMode, setupdateMode] = useState(false);

// to find post id for fetching single post

let path = (location.pathname.split('/')[2]);


// fetch single posts


useEffect(()=>{
  const singlePost = async ()=>{
    try {
      const response = await axios.get('/api/posts/'+path);
       const modifiedData = {
        ...response.data,
        username: user.username,
      };

      // Set the state with the modified data
      setsingleP(modifiedData);

    
      // Update the post for editing
      setupdatedTitle(modifiedData.title);
      setupdatedDesc(modifiedData.desc);

    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  singlePost();
},[path,updateMode,user])


//to delete the post

const handleDelete = async()=>{
  try {
    await axios.delete(`/api/posts/${singleP._id}`, {data: { username: user.username }});
  //  console.log(res);
   navigate('/')
  } catch (error) {
    console.log(error)
  }      
}


//to update the post

const handleUpdate = async()=>{
  try {  
   const res= await axios.put(`/api/posts/${singleP._id}`, {
      username: user.username,
      title: updatedTitle,
      desc: updatedDesc,
    });

    
    setupdateMode(false);
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className={styles.SinglePost}>
      {
        singleP.photo ? (
          <img src={PF + singleP.photo} alt="singlePostImage" />
        ):(
          <img src={postImg} alt="singlePostImage" />
        )
      }     
        <div className={styles.heading}>
           {
            updateMode ? <input className={styles.updateInput} type='text' value={updatedTitle} onChange={(e)=>setupdatedTitle(e.target.value)}></input>:
            <p>{singleP.title}</p>
           }
             {singleP.username === user.username && <div className={styles.icons}>
            <FiEdit className={styles.icon} onClick={()=>setupdateMode(true)}/>
            <MdOutlineDeleteOutline className={`${styles.icon} ${styles.deletebtn}`} onClick={handleDelete}/>
     </div>}
     </div>
            <div className={styles.postDetails}>
                <div className={styles.postInfo}>
                <Link to={`/?user=${user.username}`}> 
                <p>{singleP.username} </p>
                </Link>
                <p>{new Date(user.createdAt).toDateString()}</p>
                </div>
                {
                  updateMode?<textarea className={styles.updateContent} value={updatedDesc} cols="30" rows="10" onChange={(e)=>setupdatedDesc(e.target.value)}></textarea>:
                    <p className={styles.para}>{singleP.desc}</p>
                }
            </div>
            {
            updateMode&&<button className={styles.updateSubmit} onClick={handleUpdate}>Update</button>
            }
    </div>
  )
}

export default SinglePost
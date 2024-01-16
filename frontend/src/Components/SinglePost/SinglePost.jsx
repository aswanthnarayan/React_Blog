import React, { useEffect ,useState} from 'react'
import styles from './SinglePost.module.scss'
import postImg from '../../assets/singlepost.jpeg'
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'




const SinglePost = () => {

// to find post id for fetching single post
const location = useLocation();
let path = (location.pathname.split('/')[2]);

const [singleP, setsingleP] = useState({})

// fetch single posts
useEffect(()=>{
  const singlePost = async ()=>{
    try {
      const response = await axios.get('/api/posts/'+path);
      // console.log(response.data);
      setsingleP(response.data)
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }
  singlePost();
},[path])

  return (
    <div className={styles.SinglePost}>
      {
        singleP.photo ? (
          <img src={singleP.photo} alt="singlePostImage" />
        ):(
          <img src={postImg} alt="singlePostImage" />
        )
      }     
        <div className={styles.heading}>
            <p>{singleP.title}</p>
            <div className={styles.icons}>
            <FiEdit className={styles.icon}/>
            <MdOutlineDeleteOutline className={`${styles.icon} ${styles.deletebtn}`} />
     </div>
     </div>
            <div className={styles.postDetails}>
                <div className={styles.postInfo}>
                <Link to={`/?user=${singleP.username}`}> 
                <p>{singleP.username} </p>
                </Link>
                <p>{new Date(singleP.createdAt).toDateString()}</p>
                </div>
                <p className={styles.para}>{singleP.desc}</p>
            </div>
    </div>
  )
}

export default SinglePost
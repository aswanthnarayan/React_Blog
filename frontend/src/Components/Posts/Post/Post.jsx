import React from 'react'
import styles from './Post.module.scss'
import postImg from '../../../assets/singlepost.jpeg'
import { Link } from 'react-router-dom'

const Post = ({post}) => {
// console.log(post)
const PF = "http://localhost:3300/uploads/"
// console.log(post.photo)
  return (
    
    <div className={styles.post}>
      
      {
        post.photo ?(
          <img src={PF + post.photo} alt="postImg" />
        ):(
          <img src={postImg} alt="postImg" />
        )
      }
        <div className={styles.postDetails}>
            <div className={styles.postcategory}>
            {
                post.categories.map((cat,index)=>(
                  <p key={index}>{cat}</p>
                ))
              }
            </div>
            <p className={styles.postTitle}><Link to={`/post/${post._id}`}>{post.title}</Link></p>
            <p className={styles.timeStamp}> {new Date(post.createdAt).toDateString()}</p>
            <p className={styles.postContent}>{post.desc}</p>
        </div>
    </div>
  )
}

export default Post
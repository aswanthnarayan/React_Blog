import React from 'react'
import styles from './Post.module.scss'
import postImg from '../../../assets/singlepost.jpeg'
import { Link } from 'react-router-dom'

const Post = () => {
  return (
    <div className={styles.post}>
        <img src={postImg} alt="postImg" />
        <div className={styles.postDetails}>
            <div className={styles.postcategory}>
                <p>Music</p>
                <p>Life</p>
            </div>
            <p className={styles.postTitle}><Link to='./post/:postId'>Lorem ipsum dolor sit amet.</Link></p>
            <p className={styles.timeStamp}> 1 hour ago</p>
            <p className={styles.postContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque in aut quaerat id, reprehenderit iste ex voluptates culpa ut, autem nisi, eveniet error sit. Amet, est incidunt et distinctio dolores neque ipsa ratione! Nostrum adipisci quasi voluptates, incidunt delectus, reiciendis a nesciunt voluptas saepe minima harum nam. Sapiente enim iusto possimus labore porro nisi doloremque libero, animi nobis consequatur voluptatibus corporis culpa mollitia magni debitis non atque sint repudiandae facilis consectetur eveniet asperiores aspernatur accusamus!</p>
        </div>
    </div>
  )
}

export default Post
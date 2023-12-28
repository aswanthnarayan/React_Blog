import React from 'react'
import styles from './SinglePost.module.scss'
import postImg from '../../assets/singlepost.jpeg'
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";



const SinglePost = () => {
  return (
    <div className={styles.SinglePost}>
        <img src={postImg}alt="singlePostImage" />
        <div className={styles.heading}>
            <p>Lorem ipsum dolor sit amet</p>
            <div className={styles.icons}>
            <FiEdit className={styles.icon}/>
            <MdOutlineDeleteOutline className={`${styles.icon} ${styles.deletebtn}`} />
     </div>
     </div>
            <div className={styles.postDetails}>
                <div className={styles.postInfo}>
                <p>Author:Nick</p>
                <p>1 hour Ago</p>
                </div>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et magni nisi consequatur, culpa minus ad odio at molestiae, officia error fuga ut sequi. Deserunt error doloribus optio provident debitis enim adipisci, molestias facilis reprehenderit deleniti quaerat reiciendis laboriosam quisquam nostrum consequatur perspiciatis at! Inventore sed ut molestiae debitis sit, nulla laboriosam repellendus commodi perspiciatis nam deleniti ullam at quis natus in, maiores quia asperiores sint tempore. Cum molestiae officia accusamus repudiandae esse nesciunt itaque facere atque ipsum veritatis modi temporibus accusantium iure ut blanditiis amet, numquam maxime totam autem! Aut necessitatibus officia aspernatur quisquam eius optio iure atque, debitis dignissimos totam, numquam quod laboriosam. Tenetur suscipit quam nesciunt hic obcaecati dolor doloribus at sint eos. Quia mollitia in libero, blanditiis at, earum deleniti temporibus quae culpa dolor quasi facere alias eaque, suscipit perferendis. Corrupti tempora ut neque ab, distinctio eaque deserunt repellat reprehenderit iusto vero esse id odit illum.</p>
              
            </div>
    </div>
  )
}

export default SinglePost
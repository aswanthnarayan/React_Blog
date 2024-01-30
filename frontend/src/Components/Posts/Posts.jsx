import React from 'react'
import styles from './Posts.module.scss'
import Post from './Post/Post'

const Posts = ({ posts }) => {
  return (
    <div className={styles.posts}>
      {
        posts.map((post) =>
          <Post key={post._id} post={post} />
        )
      }

    </div>
  )
}

export default Posts;
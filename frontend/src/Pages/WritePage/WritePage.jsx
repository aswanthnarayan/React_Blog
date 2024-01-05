import React from 'react'
import styles from './WritePage.module.scss'
import postImg from '../../assets/singlepost.jpeg'
import { MdOutlineInsertPhoto } from "react-icons/md";



const WritePage = () => {
  return (
    <div className={styles.WritePage}>
      <img src={postImg} alt="uploaded image" />
      <form className={styles.writePost} >
        <div className={styles.formInput}>
        <label htmlFor="file">
          <MdOutlineInsertPhoto className={styles.insertImage} />
          </label>
          <input
            className={styles.titleInput}
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
          <input style={{ display: "none" }} type="file" name="file" id="file" />
         
        </div>
        <div className={styles.formInput}>
        <textarea
            className={styles.writeContent}
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
           <button className={styles.writeSubmit} type="submit">
          Publish
        </button>
        </div>

      </form>
    </div>
  )
}

export default WritePage
import React, { useContext, useState } from 'react'
import styles from './WritePage.module.scss'
import postImg from '../../assets/singlepost.jpeg'
import { MdOutlineInsertPhoto } from "react-icons/md";
import { Context } from '../../context/Context';
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';



const WritePage = () => {
  const navigate = useNavigate();

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [file, setfile] = useState(null)

  const {user} =useContext(Context)

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc
    };
    if(file){
      const data = new FormData();
      // const filename =uuidv4()+ file.name;
      const filename = Date.now() + file.name;
      data.append("name",filename)
      data.append('file', file);
      newPost.photo = filename
      try {
       await  axios.post('/api/upload',data) 
      } catch (error) {
        console.log(error)
      }
    }
    try {
      const res =  await  axios.post('/api/posts',newPost) 
      res&& navigate('/post/'+res.data._id)
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <div className={styles.WritePage}>
      {
       file?<img src={URL.createObjectURL(file)} alt="uploaded image" />:
      <img src={postImg} alt="uploaded image" />
      }
      <form className={styles.writePost} onSubmit={handleSubmit} >
        <div className={styles.formInput}>
        <label htmlFor="file">
          <MdOutlineInsertPhoto className={styles.insertImage} />
          </label>
          <input
            className={styles.titleInput}
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e)=>settitle(e.target.value)}
          />
          <input style={{ display: "none" }} type="file" name="file" id="file" onChange={(e) => setfile(e.target.files[0])}/>
         
        </div>
        <div className={styles.formInput}>
        <textarea
            className={styles.writeContent}
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e)=>setdesc(e.target.value)}
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
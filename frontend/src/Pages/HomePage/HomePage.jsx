import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.scss'
import Home from '../../Components/Home/Home'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/SideBar/Sidebar'
import axios from 'axios'
   

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  //to fetch posts from db
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        // console.log(response.data);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []); 

  return (
    <>
    <Home/>
    <div className={styles.homePage}>
      <Posts posts={posts}/>
      <Sidebar/>
    </div>
    </>
  )
}

export default HomePage

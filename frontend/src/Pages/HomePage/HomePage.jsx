import React, { useEffect, useState } from 'react'
import styles from './HomePage.module.scss'
import Home from '../../Components/Home/Home'
import Posts from '../../Components/Posts/Posts'
import Sidebar from '../../Components/SideBar/Sidebar'
import axios from 'axios'
import { useLocation } from 'react-router-dom'


const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const { search } = useLocation(); //de structured location for quireys

  //to fetch posts from db
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts' + search);

        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Home />
      <div className={styles.homePage}>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}

export default HomePage

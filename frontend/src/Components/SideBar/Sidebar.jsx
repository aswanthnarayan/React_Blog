import React, { useContext, useEffect, useState } from 'react'
import styles from './Sidebar.module.scss'
import heroImage from '../../assets/heroImage.jpg'
import { CiFacebook, CiTwitter, CiInstagram, CiYoutube, CiSearch } from "react-icons/ci";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const Sidebar = () => {

  const { user } = useContext(Context);
  const PF = "http://localhost:3300/uploads/";


  //fetch categories for sidebar
  const [cats, setcats] = useState([]);
  const [about, setAbout] = useState('');

  useEffect(() => {
    const getAbout = async () => {
      try {
        const response = await axios.get(`/api/user/${user._id}`);
        setAbout(response.data.about)
      } catch (error) {
        user && console.error('Error fetching user about:', error);
      }
    };

    const getCat = async () => {
      const categories = await axios.get('/api/categories');
      // console.log(categories.data)
      setcats(categories.data)
    }
    getCat();
    getAbout()
  }, [user && user._id])

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarItem}>
        <p className={styles.sideBarTitle}>ABOUT ME</p>
        {user && user.profilePic ? <img src={PF + user.profilePic} alt="userImage" /> : <img src={heroImage} alt="userImage" />}
        <p className={styles.sideBarAbout}>{about}</p>
      </div>
      <div className={styles.sideBarItem}>
        <p className={styles.sideBarTitle}>CATEGORIES</p>
        <ul className={styles.sideBarList}>
          {
            cats.map((cat) => (
              <Link key={cat._id} to={`/?cat=${cat.name}`}>
                <li className={styles.sideBarListItem}>{cat.name}</li>
              </Link>
            ))
          }
        </ul>
      </div>
      <div className={styles.sideBarItem}>
        <p className={styles.sideBarTitle}>Follow Me</p>
        <div className={styles.sideBarSocial}>
          <CiFacebook className={styles.icons} />
          <CiTwitter className={styles.icons} />
          <CiInstagram className={styles.icons} />
          <CiYoutube className={styles.icons} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar




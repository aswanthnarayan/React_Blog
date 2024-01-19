import React, { useEffect,useState } from 'react'
import styles from './Sidebar.module.scss'
import heroImage from '../../assets/heroImage.jpg'
import { CiFacebook ,CiTwitter ,CiInstagram ,CiYoutube, CiSearch} from "react-icons/ci";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  //fetch categories for sidebar
const [cats, setcats] = useState([])

  useEffect(()=>{
    const getCat = async ()=>{
      const categories = await axios.get('/api/categories');
      // console.log(categories.data)
      setcats(categories.data)
    }
    getCat();
  },[])

  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarItem}>
        <p className={styles.sideBarTitle}>ABOUT ME</p>
        <img src={heroImage} alt="hero" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi dolores accusamus officia sint! Sapiente quas, veritatis molestiae necessitatibus laudantium consequatur commodi itaque at voluptate?</p>
      </div>
      <div className={styles.sideBarItem}>
      <p className={styles.sideBarTitle}>CATEGORIES</p>
      <ul className={styles.sideBarList}>
        {
          cats.map((cat)=>(
              <Link  key={cat._id} to={`/?cat=${cat.name}`}>
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
    <CiTwitter className={styles.icons}/>
    <CiInstagram className={styles.icons}/>
    <CiYoutube className={styles.icons} />
</div>

</div>
    </div>
  )
}

export default Sidebar
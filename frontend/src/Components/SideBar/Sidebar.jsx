import React from 'react'
import styles from './Sidebar.module.scss'
import heroImage from '../../assets/heroImage.jpg'
import { CiFacebook ,CiTwitter ,CiInstagram ,CiYoutube, CiSearch} from "react-icons/ci";

const Sidebar = () => {
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
        <li className={styles.sideBarListItem}>Life</li>
        <li className={styles.sideBarListItem}>Tech</li>
        <li className={styles.sideBarListItem}>Music</li>
        <li className={styles.sideBarListItem}>Sports</li>
        <li className={styles.sideBarListItem}>Cinima</li>
        <li className={styles.sideBarListItem}>Books</li>

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
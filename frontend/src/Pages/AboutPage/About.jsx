import React, { useContext } from 'react'
import styles from './About.module.scss'

import heroImage from '../../assets/heroImage.jpg'
import { CiFacebook, CiTwitter, CiInstagram, CiYoutube, CiSearch } from "react-icons/ci";
import { Context } from '../../context/Context';

const About = () => {


  const { user } = useContext(Context);
  const PF = "http://localhost:3300/uploads/";


  return (
    <div className={styles.about}>
      <div className={styles.aboutItem}>
        <p className={styles.aboutTitle}>{`Hey Iam ${user.username}`}</p>
        {user && user.profilePic ? <img src={PF + user.profilePic} alt="userImage" /> : <img src={heroImage} alt="userImage" />}
        <p className={styles.aboutdesc}>{user.about}</p>
      </div>
      {/* <div className={styles.aboutItem}>
      <p className={styles.catoTitle}>CATEGORIES</p>
      <ul className={styles.aboutList}>
        <li className={styles.aboutListItem}>Life</li>
        <li className={styles.aboutListItem}>Tech</li>
        <li className={styles.aboutListItem}>Music</li>
        <li className={styles.aboutListItem}>Sports</li>
        <li className={styles.aboutListItem}>Cinima</li>
        <li className={styles.aboutListItem}>Books</li>

      </ul>
</div> */}
      <div className={styles.aboutItem}>
        <p className={styles.followTitle}>Follow Me</p>
        <div className={styles.aboutSocial}>
          <CiFacebook className={styles.icons} />
          <CiTwitter className={styles.icons} />
          <CiInstagram className={styles.icons} />
          <CiYoutube className={styles.icons} />
        </div>

      </div>
    </div>
  )
}

export default About
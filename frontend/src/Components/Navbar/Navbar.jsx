import React,{ useState } from 'react'
import styles from './Navbar.module.scss'
import { CiFacebook ,CiTwitter ,CiInstagram ,CiYoutube, CiSearch} from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import userImage from '../../assets/heroImage.jpg'
import { Link } from 'react-router-dom';

const Navbar = (isLoggedIn) => {

     const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className={styles.navbar}>
    <div className={styles.topLeft}>
    <CiFacebook className={styles.icons} />
    <CiTwitter className={styles.icons}/>
    <CiInstagram className={styles.icons}/>
    <CiYoutube className={styles.icons} />
    </div>
    <div className={styles.topCenter}>
        <ul className={styles.list}>
        <li>
          <Link  to='/'>HOME</Link>
        </li>
          {!showMobileMenu && (
            <>
              <li>
              <Link  to='/about'>ABOUT</Link>
              </li>
              <li><Link  to='/profile'>PROFILE</Link></li>
              <li><Link  to='/post'>WRITE</Link></li>
              <li><Link to='/login'>LOGOUT</Link></li>
            </>
          )}
        </ul>
        
    </div>
    <div className={styles.topRight}>
        <img src={userImage} alt="userImage" />
        <CiSearch className={styles.icons}/>
    </div>
    {!showMobileMenu ? <RxHamburgerMenu className={styles.hamburgerMenu} onClick={toggleMenu} />:<IoMdClose className={styles.hamburgerMenu} onClick={toggleMenu}/> }
    
        <div className={`${styles.mobileMenu} ${showMobileMenu ? styles.active: ''}`}>
          <ul>
            <li><Link  to='/about'>ABOUT</Link></li>
            <li><Link  to='/profile'>PROFILE</Link></li>
            <li><Link  to='/post'>WRITE</Link></li>
            <li><Link  to='/login'>LOGOUT</Link></li>
          </ul>
        </div>
    
    </div>
  )
}

export default Navbar

import React,{ useContext, useState } from 'react'
import styles from './Navbar.module.scss'
import { CiFacebook ,CiTwitter ,CiInstagram ,CiYoutube, CiSearch} from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import userImage from '../../assets/heroImage.jpg'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const Navbar = (isLoggedIn) => {

  const PF = "http://localhost:3300/uploads/";

    const { user, dispatch } = useContext(Context);
     const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = ()=>{
    dispatch({ type: "LOGOUT" });
  }

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
            
              {/* <li>
              <Link  to='/about'>ABOUT</Link>
              </li> */}
              <li><Link  to='/profile'>PROFILE</Link></li>
              <li><Link  to='/post'>WRITE</Link></li>
              {
              user?<li onClick={handleLogout}><Link to='/login'>LOGOUT</Link></li>
               :<Link to= '/login' ><button className={styles.loginButton}>Login</button></Link>
              }
            </>
          )}
        </ul>
        
    </div>
    <div className={styles.topRight}>
      <Link to={'/profile'}>
      {user&&user.profilePic?<img src={PF+user.profilePic} alt="userImage" />:<img src={userImage} alt="userImage" />}
        </Link>
        <CiSearch className={styles.icons}/>
    </div>
    {!showMobileMenu ? <RxHamburgerMenu className={styles.hamburgerMenu} onClick={toggleMenu} />:<IoMdClose className={styles.hamburgerMenu} onClick={toggleMenu}/> }
    
        <div className={`${styles.mobileMenu} ${showMobileMenu ? styles.active: ''}`}>
         { user ?<ul>
            {/* <li><Link  to='/about'>ABOUT</Link></li> */}
            <li><Link  to='/profile'>PROFILE</Link></li>
            <li><Link  to='/post'>WRITE</Link></li>
             <li onClick={handleLogout}><Link to='/login'>LOGOUT</Link></li>
             
          </ul>:<ul>
              <Link to= '/login' ><button className={styles.login} >Login</button></Link> 
              <Link to= '/register' ><button className={styles.register}>Register</button></Link>
            </ul>}
        </div>
    
    </div>
  )
}

export default Navbar

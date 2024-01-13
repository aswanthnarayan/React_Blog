import React, { useState } from 'react'
import styles from './LoginPage.module.scss'
import { Link } from 'react-router-dom'

const LoginPage = ({setisLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <div className={styles.login}>
    <p className={styles.loginTitle}>Login</p>
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <label >Email</label>
      <input className={styles.loginInput} type="email" placeholder="Enter your email..." value={email}
          onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input className={styles.loginInput} type="password" placeholder="Enter your password..." value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit" className={styles.loginButton}>Login</button>
    </form>
      <button className={styles.loginRegisterButton}> <Link to='/register'>Register</Link></button>
  </div>
  )
}

export default LoginPage
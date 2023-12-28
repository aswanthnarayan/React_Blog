import React from 'react'
import styles from './LoginPage.module.scss'

const LoginPage = () => {
  return (
    <div className={styles.login}>
    <p className={styles.loginTitle}>Login</p>
    <form className={styles.loginForm}>
      <label >Email</label>
      <input className={styles.loginInput} type="email" placeholder="Enter your email..." />
      <label>Password</label>
      <input className={styles.loginInput} type="password" placeholder="Enter your password..." />
      <button className={styles.loginButton}>Login</button>
    </form>
      <button className={styles.loginRegisterButton}>Register</button>
  </div>
  )
}

export default LoginPage
import React from 'react'
import styles from './Register.module.scss'

const Register = () => {
  return (
    <div className={styles.register}>
    <p className={styles.registerTitle}>Register</p>
    <form className={styles.registerForm}>
    <label>Username</label>
        <input className={styles.registerInput} type="text" placeholder="Enter your username..." />
      <label >Email</label>
      <input className={styles.registerInput} type="email" placeholder="Enter your email..." />
      <label>Password</label>
      <input className={styles.registerInput} type="password" placeholder="Enter your password..." />
      <button className={styles.registerButton}>Register</button>
    </form>
      <button className={styles.registerLoginButton}>Login</button>
  </div>
  )
}

export default Register
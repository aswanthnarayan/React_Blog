import React, { useState } from 'react'
import styles from './Register.module.scss'
import {Link ,useNavigate} from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegistration = async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('api/auth/register',{
        username,
        email,
        password,
      })
      // console.log(response);
      response.data && navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.register}>
    <p className={styles.registerTitle}>Register</p>
    <form className={styles.registerForm} onSubmit={handleRegistration}>
    <label>Username</label>
        <input className={styles.registerInput} type="text" placeholder="Enter your username..." value={username} onChange={(e)=>setUsername(e.target.value)} />
      <label >Email</label>
      <input className={styles.registerInput} type="email" placeholder="Enter your email..." value={email}
          onChange={(e) => setEmail(e.target.value)} />
      <label>Password</label>
      <input className={styles.registerInput} type="password" placeholder="Enter your password..." value={password}
          onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" className={styles.registerButton}>Register</button>
    </form>
      <button className={styles.registerLoginButton}><Link to="/login">Login</Link></button>
  </div>
  )
}

export default Register
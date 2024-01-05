import React, { useState } from 'react'
import styles from './Register.module.scss'
import { useNavigate ,Link } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegistration = (event) => {
    event.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    let userExists = false;
        for (const user of existingUsers) {
          if (user.email === email) {
            userExists = true;
            break;
          }
        }
    if (userExists) {
      alert('Email already exists. Please use a different email.');
      navigate('/login'); 
    } else {
      const newUser = { username, email, password };
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('Registration successful!');
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/login'); 
    }
  };


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
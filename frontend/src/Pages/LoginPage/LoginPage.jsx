import React, { useContext, useState } from 'react'
import styles from './LoginPage.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState(false)
  const { dispatch, isFetching } = useContext(Context)
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" })
    try {
      const response = await axios.post('api/auth/login', {
        email: email,
        password: password,
      })
      dispatch({ type: 'LOGIN_SUCSESS', payload: response.data });
      navigate('/')
    } catch (error) {
      setError(true);
      dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
  }
  // console.log(isFetching)
  return (
    <div className={styles.login}>
      <p className={styles.loginTitle}>Login</p>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <label >Email</label>
        <input className={styles.loginInput} type="email" placeholder="Enter your email..." value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input className={styles.loginInput} type="password" placeholder="Enter your password..." value={password}
          onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className={styles.loginButton} >Login</button>
      </form>
      <button className={styles.loginRegisterButton} > <Link to='/register'>Register</Link></button>
      {
        error&&<span className={styles.error}>Wrong Credentials..</span>
      }
    </div>
  )
}

export default LoginPage
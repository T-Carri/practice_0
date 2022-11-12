import React, {useRef, useContext, useState} from 'react'
import './Login.css'
import {Alert} from 'react-bootstrap'
import UserContext from '../../context/UserContext'
import { auth } from '../../firebase/Firebase'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
  const {signIn} = useContext(UserContext)
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('');
  let navigate = useNavigate();
const handleSubmit= async(e)=>{
  e.preventDefault();
  setError('')
  try {
   await signIn( emailRef.current.value, passwordRef.current.value).then( (response)=>{
      navigate('/home')
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      console.log(response._tokenResponse.refreshToken)
    }
    )


  } catch (error) {
    setError(error.message)
      console.log(error.message)
  }
}


  return (
    <div className="full-screen-container">
    <div className="login-container">
      <h1 className="login-title">Bienvenido señor Bryan</h1>
      {error&&<Alert variant="danger">{error}</Alert>}
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group success">
          <label for="email">Email</label>
          <input  ref={emailRef}  type="email" name="email" id="email"/>
          <span className="msg">Valid email</span>
        </div>

        <div className="input-group error">
          <label for="password">Password</label>
          <input ref={passwordRef} type="password" name="password" id="password"/>
          <span className="msg">Incorrect password</span>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  </div>
  )
}


import React from 'react'
import './Login.css'
export const Login = () => {
  return (
    <div class="full-screen-container">
    <div class="login-container">
      <h1 class="login-title">Bienvenido señor Bryan</h1>
      <form class="form">
        <div class="input-group success">
          <label for="email">Email</label>
          <input type="email" name="email" id="email"/>
          <span class="msg">Valid email</span>
        </div>

        <div class="input-group error">
          <label for="password">Password</label>
          <input type="password" name="password" id="password"/>
          <span class="msg">Incorrect password</span>
        </div>

        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
  )
}


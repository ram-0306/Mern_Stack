import React from 'react'
import classes from './login.module.css';

const login = () => {
  return (
    <div>
        <h1>Login</h1>
        <form>
          <label>
            Username
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <button type="submit" className={classes.loginBtn}>Login</button>
        </form>
    </div>
  )
}

export default login
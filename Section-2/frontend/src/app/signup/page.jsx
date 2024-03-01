import React from 'react'

const signup = () => {
  return (
    <div>
        <h1>Signup</h1>
        <form>
          <label>
            Username
            <input type="text" />
          </label>
          <label>
            Password
            <input type="password" />
          </label>
          <button type="submit" className='myBtn'>Submit</button>
        </form>
    </div>
  )
}

export default signup
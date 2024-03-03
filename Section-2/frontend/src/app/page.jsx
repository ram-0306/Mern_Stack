import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
    <Link href="/login">Login</Link>
    <Link href="/contact">Login</Link>
    <Link href="/signup">Login</Link>
    <Link href="/contact">Login</Link>
    <Link href="/eventHandling">EventHandling</Link>
    <Link href="/todolist">To Do List</Link>

    
      <h1 style={{ color:'red', fontSize: '2em'}}>Home Page</h1>
      <p>Welcome to Next.js!</p>

      <button type="button" className='myBtn'>Nice</button>
    </div>
  )
}

export default Home;

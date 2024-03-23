import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
    <Link href="/login">Login</Link>
    <Link href="/signup">SignUp</Link>
    <Link href="/contact">Contact</Link>
    <Link href="/about">About</Link>
    <Link href="/eventHandling">EventHandling</Link>
    <Link href="/todolist">To Do List</Link>
    <Link href="/comment">Comment App</Link>
    <Link href="/uploadPost">Comment App</Link>

    
      <h1 style={{ color:'red', fontSize: '2em'}}>Home Page</h1>
      <p>Welcome to Next.js!</p>

      <button type="button" className='myBtn'>Nice</button>
    </div>
  )
}

export default Home;

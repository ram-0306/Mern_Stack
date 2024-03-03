import React from 'react'
import classes from './login.module.css';


const login = () => {
  return (

    <div className='container d-flex justify-content-center my-3 p-5 ' style={{background: 'linear-gradient(90deg, hsla(211, 96%, 62%, 1) 0%, hsla(295, 94%, 76%, 1) 100%)', height:400}}>
     <div className='loginBody border p-5 shadow'>

       <h2 className='text-light'>Login to Your Account</h2>
            
          <div className='col'>

             <form className='d-flex justify-content-center flex-column gap-2'>

               <input className={`${classes.inputElements} , p-2`} type="text" placeholder='Username' />

               <input className={`${classes.inputElements} , p-2`} type="password" placeholder='Password'/>
        
               <button type="submit" className={`${classes.loginBtn}`}>Submit</button>
              

             </form>

          </div>

          </div>
        


    </div>
   
  )
}

export default login
import React from 'react';

export default function LoginPage(){
  

  return (
    <div className='login-page'>
        <form className='login-form'>
            <h2>Login Form</h2>
            <input type="text" placeholder='Name' required/>
            <input type="password" placeholder='Password' required />
            <button className='login-btn'>Login</button>
        </form>
      
    </div>
  )
}


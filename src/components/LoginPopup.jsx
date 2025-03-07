import React, { useState } from 'react';
import "./LoginPopup.css";

const LoginPopup = ({setShowLogin}) => {

 const [currState,setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className='popup-container'>
           <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() =>setShowLogin(false)} src="https://res.cloudinary.com/dtv22dsxc/image/upload/v1741348185/cross_icon_yfv2ul.png" alt=''/>
           </div>
           <div className="login-popup-input">
             {currState === "Login" ? <></> : <input type='text' placeholder='Your name' required/> }
             <input type='email' placeholder='Your email' required/>
             <input type='password' placeholder='Password' required/>
           </div>
           <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
           <div className="login-popup-condition">
            <input type='checkbox' required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
           </div>
           {currState === "Login" 
             ?<p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
             :<p>Already have an account <span onClick={() => setCurrState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup
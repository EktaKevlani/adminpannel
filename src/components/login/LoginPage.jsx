import React from 'react'
import "./login.css"
import { useState } from 'react';
import {NavLink} from "react-router-dom"

   
const LoginPage = () => {
    const[email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const emailset=(event)=>{
        setemail(event.target.value)
    }

    const passwordset=(event)=>{
        setpassword(event.target.value)
    }

    
  return (
    <>
     <div className="container-fluid bg-dark background">
        <div className="container">
            <h1 className='text-white text-center pt-5 font'>Login Page</h1>
           <form action="">
            <div className='text-center mt-5'>
                <label htmlFor="email" className='text '>Email</label><br/>
                <input type="text" name='email' value={email} onChange={emailset} />
            </div>
            <div className='text-center mt-5'>
                <label htmlFor="password" className='text '>Password</label><br/>
                <input type="password" name='password' value={password} onChange={passwordset}/>
            </div>
           <div className='mt-5 text-center'>
                
               <NavLink className="btn button" to="/admin">Login</NavLink>
           </div>
           </form>
        </div>
     </div>
    </>
  )
}

export default LoginPage

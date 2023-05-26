import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import {Link} from "react-router-dom";


const Login = () => {
    const[formData,setFormData]=useState({
        name:"",
        password:""
    })

    const{name,password}=formData;

    const onChange=(e)=>{
      e.preventDefault();
      setFormData((pre)=>({
        ...pre,
[e.target.name]: e.target.value
      })

      )
    }

    const onSubmit=(e)=>{
      e.preventDefault();


    }
  return (
    <section className='heading'>
      <h1><FaSignInAlt/>
      Login In your Account</h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
        <input id='name' type='email' className='form-control' name='name' value={name} placeholder='Enter Your Email' onChange={onChange}/>
        </div>
      <div className='form-group'>
      <input id='password' type='password' className='form-control' name='password' value={password} placeholder='Enter Your Password' onChange={onChange}/>
      </div>
      
        
        <button type='submit' className='btn btn-block'>Submit</button>
        <Link to="/signup" ><p style={{color:"red", fontSize:"14px"}}>if You don't have Account Please SignUp First</p></Link>
      </form>

      
      </section>
  )
}

export default Login
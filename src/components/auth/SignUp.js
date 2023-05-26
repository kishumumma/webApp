import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { useForm, Controller } from "react-hook-form";
import {Link , useNavigate} from "react-router-dom"


const SignUp = () => {
  const navigate=useNavigate();
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    passwordConfirm:""
  })
  const {name,email,password,passwordConfirm} =formData;
   const onChange=(e)=>{
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))

   }
  
   const onSUbmit=(e)=>{
    e.preventDefault();
    navigate("/" ,{state:{formData}})
    console.log("formadata" , formData)
    setFormData({
      name: "",
      email: "",
      password: "",
      passwordConfirm: ""
    });

   }
    return (
      <>
     <section className='heading'>
      <h1>
<FaUser/> Register
      </h1>
      <p>Please Register Your Account</p>
      <form onSubmit={onSUbmit}>
        <div className='form-group'>
        <input type='text' className='form-control' id='name' name='name' value={name} placeholder='Enter your Name' onChange={onChange}/>
        </div>
        <div className='form-group'>
        <input type='text' className='form-control' id='email' name='email' value={email} placeholder='Enter your Email' onChange={onChange}/>
        </div>
        <div className='form-group'>
        <input type='text' className='form-control' id='password' name='password' value={password} placeholder='Enter your Password' onChange={onChange}/>
        </div>
        <div className='form-group'>
        <input type='text' className='form-control' id='name' name='passwordConfirm' value={passwordConfirm} placeholder='Confirm Password' onChange={onChange}/>
        </div>
         <Link to="/login" > <p style={{fontSize:"14px"}}>if You Already have Account</p> </Link>
        <div className='form-group'>
          <button type='submit' className='btn btn-block'>Submit</button>
        </div>
      </form>
     </section>

      </>
    );
}

export default SignUp
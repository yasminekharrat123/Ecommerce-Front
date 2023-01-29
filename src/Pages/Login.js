import { Component } from 'react';
import Login from '../Components/Login/Login';
import Signup from '../Components/Login/Signup';
import '../Components/Login/style.css'
import { useState } from 'react';
export default function LogReg()
{

    const [CurrentForm,setCurrentForm]=useState("Login");
  if(CurrentForm==="Login") return (  
    <div className='page_container'> <Login CurrentForm={CurrentForm} setCurrentForm={setCurrentForm}/> </div>
  );
  
  else return(
    <div className='page_container'> <Signup CurrentForm={CurrentForm} setCurrentForm={setCurrentForm} /> </div>
  ) 
}
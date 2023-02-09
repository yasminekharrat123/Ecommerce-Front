import { Component } from 'react';
import Log from '../components/Login_Signup/Log';
import Signup from '../components/Login_Signup/Signup';
import NavBarL from '../components/Login_Signup/NavBarL';
import '../components/Login_Signup/style.css'
import { useState } from 'react';
export default function LogReg()
{

    const [CurrentForm,setCurrentForm]=useState("Login");
  if(CurrentForm==="Login") return (  
    <div>
      
      <div className='page_container'>
        <NavBarL/>
       <Log CurrentForm={CurrentForm} setCurrentForm={setCurrentForm}/>
       </div>
    </div>
  );
  
  else return(
      
      <div className='page_container'> 

      <NavBarL/>
       <Signup CurrentForm={CurrentForm} setCurrentForm={setCurrentForm}/>
        </div>
  ) 

}



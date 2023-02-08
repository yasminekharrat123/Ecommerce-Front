import { Component } from "react";
import Log from "../components/Login_Signup/Log";
import Signup from "../components/Login_Signup/Signup";
import NavbarLogin from "../components/NavBar/NavBarLogin";
import "../components/Login_Signup/style.css";
import { useState } from "react";
export default function LogReg() {
  const [CurrentForm, setCurrentForm] = useState("Login");
  if (CurrentForm === "Login")
    return (
      <div>
        <NavbarLogin />
        <div className="page_container">
          {" "}
          <Log CurrentForm={CurrentForm} setCurrentForm={setCurrentForm} />{" "}
        </div>
      </div>
    );
  else
    return (
      <div>
        <NavbarLogin />
        <div className="page_container">
          {" "}
          <Signup
            CurrentForm={CurrentForm}
            setCurrentForm={setCurrentForm}
          />{" "}
        </div>
      </div>
    );
}

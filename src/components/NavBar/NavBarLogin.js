import React from "react";
import logo from "../assets/logo.png";
import "../NavBar/NavBar.css";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-color2">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            width="80"
            height="70"
            class="d-inline-block align-text-top"
          />
        </span>
        <span className="title d-inline-block title" style="{font-size=1.9em}">
          Aura
        </span>
      </div>
    </nav>
  );
}

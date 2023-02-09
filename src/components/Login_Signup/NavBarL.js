
import logo from "../assets/logo.png";
import "./style.css"

export default function NavBarL()
{
    return (
      <div className="nv">
        <img src={logo} alt="Logo"
            width="140"
            height="120"
        />
        <span className="title d-inline-block title"> Aura </span>
      </div>
    );  
}
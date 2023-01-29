import { useState } from "react";
import "./style.css"
export default function Signup({CurrentForm,setCurrentForm})
{
    function handleSubmit(e)
    {
        e.preventDefault();
        if(agent==="Client")
        {
            console.log(email+pass);
        }
        else
        {
            console.log(email+pass+Service)
        }
    }
    function resolveAgent()
    {
        if(agent==="Commercant") return(
            <div className="added"> 
                <label htmlFor="Nom de Service" className="form__label">Nom de Service: </label> <br/>
                <input required value={Service} type="text" id="Nom de Service" placeholder="Nom de Service..." className="form__field" onChange={
                (e)=> setService(e.target.value)
            }/>
            </div>
        ) 
        else return;
    }
    const [agent,setAgent]=useState("Client");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [Service,setService]=useState("");
    const [username,setUsername]=useState("");
    return(
        <div className="form__group field">
            <h1> S'inscrire</h1>
            <form className="login__form" onSubmit={handleSubmit}> 
            <label htmlFor="username" className="form__label">Username: </label> 
            <input required value={username} type="text" id="username" placeholder="Username..." className="form__field" onChange={
                (e)=> setUsername(e.target.value)
            }/>
            <label htmlFor="e-mail" className="form__label">E-mail: </label> 
            <input required value={email} type="email" id="e-mail" placeholder="E-mail..." className="form__field" onChange={
                (e)=> setEmail(e.target.value)
            }/>
            <label htmlFor="passwd" className="form__label"> Mot de passe: </label>
            <input  required value={pass} type="password" id="passwd" placeholder="Mot de passe..." className="form__field" onChange={
                (e)=> setPass(e.target.value)
            }/>
            <div className="options" >
            <span id="Ras"> S'inscrire comme: </span><br/>
            <input className="option" type="radio" id="Client" name="agent" value="Client" checked={agent==="Client"} onChange={
                ()=> 
                {
                    setAgent("Client");
                }
            } />
            <label className="option" htmlFor="Client"> Client </label><br/>
            <input className="option" type="radio" id="Commercant" name="agent" value="Commercant" checked={agent==="Commercant"} onChange={
                ()=> 
                {
                    setAgent("Commercant");
                }
            } />
            <label className="option" htmlFor="Commercant"> Commercant </label><br/>
            </div>
            <div> {resolveAgent()}</div>
            <button className="form__buttons" type="submit"> S'inscrire </button>
            <span>Vous avez déja un compte? <a className="hyperlink" onClick={
            ()=> setCurrentForm("Login")
        }> Se Connecter</a></span> 
            </form>  

        </div>
    );
}
import { useState } from "react";
import "./style.css"


export default function Log({CurrentForm,setCurrentForm})
{
    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(email+pass);
    }
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    return(
        <div className="form__group">
        <h1> Se connecter</h1>
        <form className="login__form" onSubmit={handleSubmit}> 
        {/* <div className="label"> */}
        <label htmlFor="e-mail" className="form__label">E-mail: </label>
        <input required value={email} type="email" id="e-mail" placeholder="E-mail..." className="form__field" onChange={
                (e)=> setEmail(e.target.value)
            }/>
        <label htmlFor="passwd" className="form__label"> Mot de passe: </label>
        <input required value={pass} type="password" id="passwd" placeholder="Mot de passe..." className="form__field" onChange={
                (e)=> setPass(e.target.value)
            }/> 
        {/* </div> */}
        <button className="form__buttons" type="submit" > Se connecter </button>
        <span>Nouveau sur ce site? <a className="hyperlink" onClick={
            ()=> setCurrentForm("Signup")
        }> S'inscrire</a></span> 
        </form>  

        </div>
    )
}
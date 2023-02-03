import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Product from "../Product/Product";
import './Cart.css'
import { Link } from 'react-router-dom';


export default function Cart () {
const a={image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUj7REegokAcagfwjWREyFtWu_yPqCpvDLTS_J7Oq&s",title:"ProductInCart",description:"Descreption:ProductInCart"}

const [CartProducts,setCartProducts]=useState([a,a,a,a,a,a])
const [CommandePassez,setCommandePassez]=useState(false)

  if(!CommandePassez)
  return (
    <div>
        <NavBar/>
        <h1>In Cart:</h1>
        <div className="ProductsList container">
            {CartProducts.length>0? CartProducts.map((u)=>{
               return  <div className="ProductList"><Product
                    title={u.title}
                description={u.description}
                image={u.image}
              /></div>}):null}</div>
        <div className='valbttn'>
                <button className='pbttn' onClick={()=>{setCartProducts({})
               setCommandePassez(true) }}>Passez Commande</button>
        </div>      

    </div>
  )
  else 
    return(
        <div>Passer une commande <Link to={"/Buyer"}> ici</Link></div>
    )
}

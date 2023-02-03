import NavBarS from "../NavBar/NavBarS";
import React, { useState } from 'react'
import Product from "../Product/Product";
import "./AccDec.css"
import { Link } from 'react-router-dom';


export default function AccDec(){

    const a0={id:Number(0),image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUj7REegokAcagfwjWREyFtWu_yPqCpvDLTS_J7Oq&s",title:"ProductInCart",description:"Descreption:ProductInCart"}
    const a1={id:Number(1),image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUj7REegokAcagfwjWREyFtWu_yPqCpvDLTS_J7Oq&s",title:"ProductInCart",description:"Descreption:ProductInCart"}
    const a2={id:Number(2),image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfUj7REegokAcagfwjWREyFtWu_yPqCpvDLTS_J7Oq&s",title:"ProductInCart",description:"Descreption:ProductInCart"}


  
    const [CartProducts,setCartProducts]=useState([a0,a1,a2])  
    const [IsAccepted,setIsAccepted]=useState()  

    const handleClickAcc=(id)=>{
        setIsAccepted(true)
        console.log("Commande acceptée")
    }
    const handleClickDec=(id)=>{
        setIsAccepted(false)
        console.log("Commande refusée")
    }


return(
    <div>
        <NavBarS/>
        <div className="row my-4 container">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th>Image</th>
                                    <th>Nom</th>
                                    <th>Quantité</th>
                                    <th>Client</th>
                                    <th  className="In">Confirmation</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    CartProducts.map(
                                        item=>(
                                            <tr>
                                                 <td>{item.id}</td>
                                                 <td><img src={item.image}
                                                    className="fluid rouned"
                                                    width={60}
                                                    height={60}
                                                    alt=""
                                                 /></td>
                                                 <td>{item.title}</td>
                                                 <td>12/23</td>
                                                 <td>Nassim</td>
                                                 <td ><button className="Accbttn" onClick={()=>handleClickAcc(item.id)}>Accepter</button>
                                                      <button className="Refbttn" onClick={()=>handleClickDec(item.id)}>Refuser</button></td>
                                                 
                                            </tr>
                                        )
                                    )

                                }
                                <tr>
                                <th colSpan={5} className="text-center">Total:</th>
                                <td>
                                    <span className="badge bg-danger rounded-pill">9999$</span>
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
import React from 'react'
import NavBar from './NavBar'
import  Products  from './Products'
import "./Cart.css"

export const Cart = () => {
  return (
    <div>
        <NavBar/>
        <div>
            <h2 className='text-center fw-normal p-2 mt-4'>Votre Commande:</h2>
            <div className='Products'>
                <Products  OrdersPage={true}/>
                <Products OrdersPage={true}/>
                <Products OrdersPage={true}/>
            </div>
            <div className='valbttn'>
                <button className='pbttn'>Passez Commande</button>
            </div>
        </div>
    </div>
  )
}

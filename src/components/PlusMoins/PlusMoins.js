import React, { useState } from 'react'

export const PlusMoins = (props) => {
  
    const [nbProduit,setnbProduit]=useState(0)  

    const handleClickPlus=()=>{
        setnbProduit(nbProduit+1)
    }
    const handleClickMinus=()=>{

      if(nbProduit>0)setnbProduit(nbProduit-1)
    }
    const handleQuantityInput=(e)=>{
      setnbProduit(Number(e.target.value))
    }
   
  
    return (
    <div><button className="Accbttn1" onClick={()=>{handleClickPlus()}}>+</button>
    <input value={nbProduit} onChange={(e)=>{handleQuantityInput(e)}} type="number" min='0' className='quantitybttn'/>
    <button className="Refbttn1" onClick={()=>handleClickMinus()}>-</button></div>
  )
}

import React from "react";
import NavBar from "./NavBar";
import  Products  from './Products'
import "./Cart.css"

export default class Favourites extends React.Component{
constructor(props){
    super(props)
}



render(){
    return(
        <div>
            <NavBar/>
            <div>
            <h2 className='text-center fw-normal p-2 mt-4'>Listes de favouries:</h2>
            <div className='Products'>
                <Products FavPage={true}/>
                <Products FavPage={true}/>
                <Products FavPage={true}/>
            </div>
        </div>
        </div>
    )
}

}
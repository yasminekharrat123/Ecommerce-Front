import React from "react";
import "../ProductSeller/ProductSeller.css"
export default function ProductSeller(props){
    return(
        <div ClassName="card">
            <img src={props.image}Classname="card-img-top" alt='...'/>
            <div ClassName="card-body">
                <h5 ClassName="card-title">{props.title}</h5>
                <p ClassName="card-text">{props.description}</p>
                <div ClassNmae="card-price">{props.price}</div>
                <button ClassName="modern-button"
                >Remove</button>
            </div>

        </div>
    );
}
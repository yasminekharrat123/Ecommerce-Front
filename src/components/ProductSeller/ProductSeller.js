import React from "react";
export default function ProductSeller(props){
    return(
        <div ClassName="card">
            <img src={props.image}Classname="card-img-top" alt='...'/>
            <div ClassName="card-body">
                <h5 ClassName="card-title">{props.title}</h5>
                <p ClassName="card-text">{props.description}</p>
                <div ClassNmae="card-price">{props.price}</div>
                <button onClick="removeElement()">Remove</button>
            </div>

        </div>
    );
}
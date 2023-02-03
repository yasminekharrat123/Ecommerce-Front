import { useState } from "react";
import NavBarS from "../NavBar/NavBarS";
import Product from "../Product/Product";
import './OrdersPage.css'


export default function OrdersPage(){
const [ProductsOP,setProductOP]=useState([])
const [addClicked,setaddClicked]=useState(false)
const [image,setImage]=useState()
const [title,setTitle]=useState()
const [description,setDescription]=useState()

const handleAddClick=()=>{
   
    setaddClicked(!addClicked)
}


const handleAddClick2=()=>{
    const tmp=ProductsOP
    tmp.push({image:image,title:title,description:description})
    console.log(ProductsOP)
    setaddClicked(!addClicked)
}

const handleAddInput1=(e)=>{
setImage(e.target.value)

}

const handleAddInput2=(e)=>{
setTitle(e.target.value)
    }


const handleAddInput3=(e)=>{
setDescription(e.target.value)
        }
        
    if(!addClicked)
    return(
        <div className="bg-color1">
            <NavBarS/>


            
            <div className="ProductsList">
            {ProductsOP.length>0? ProductsOP.map((u)=>{
               return  <div className="ProductList"><Product
                    title={u.title}
                description={u.description}
                image={u.image}
              /></div>}):null}</div>

            <div className="addbttnContainer"><button className="addbttn" onClick={()=>handleAddClick()}>Add new Product</button></div>
        </div>
    )
    else
    return(
        <div className="bg-color1">
         <NavBarS/>
            <div className="bg-color1 OP">
             <div className="headOP">Add a Product:</div>
                <div className="form-add-page">
                   <div><span>Product image :</span><input className="image-input" type="text" onBlur={(e)=>{handleAddInput1(e)}} /></div>
                   <div><span>Product title :</span><input className="image-input" type="text" onBlur={(e)=>{handleAddInput2(e)}}/></div>
                   <div><span>Product description :</span><input className="image-input des" type="text" onBlur={(e)=>{handleAddInput3(e)}}/></div>
                </div>
                <div className="addbttnContainer"><button className="addbttn" onClick={()=>handleAddClick2()}>Ajouter</button></div> 
            </div>
        </div>

    )
}
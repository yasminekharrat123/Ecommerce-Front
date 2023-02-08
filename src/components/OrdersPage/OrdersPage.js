import { useState,useRef } from "react";
import NavBarS from "../NavBar/NavBarS";
import Product from "../Product/Product";
import './OrdersPage.css'



export default function OrdersPage(){
/*const [ProductsOP,setProductOP]=useState([])
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
        }*/
        const [addClicked,setaddClicked]=useState(false)
        const handleAddClick=()=>{
   
            setaddClicked(!addClicked)
        }



        const [title, setTitle] = useState("");
        const [price, setPrice] = useState(0);
        const [quantity, setQuantity] = useState(0);
        const [description, setDescription] = useState("");
        const [products, setProducts] = useState([]);
      
        const imageInput = useRef(null);
      
        const [imagePreview, setImagePreview] = useState(null);
      
        const handleImageChange = (event) => {
          const selectedFile = event.target.files[0];
          setImagePreview(URL.createObjectURL(selectedFile));
        };
      
        const handleAddProduct = () => {
          if (title==""||price==0||quantity==0||imagePreview==null) {alert("Ajout invalid ,s'assurer que tous les champs sont remplis.")
          setTitle("")
          setPrice(0)
          setQuantity(0)
          setDescription("")
          setImagePreview(null)}
          else{
          const tmp=products
          tmp.push({image:imagePreview,title:title,price:price,description:description})
          setProducts(tmp)
          setTitle("")
          setPrice(0)
          setQuantity(0)
          setDescription("")
          setImagePreview(null)}
        };         
        
    if(!addClicked)
    return(
        <div className="bg-color1">
            <NavBarS/>


            
            <div className="ProductsList">
            {products.length>0? products.map((u)=>{
               return  <div className="ProductList"><Product
                    title={u.title}
                description={u.description}
                image={u.image} price={u.price}
              /></div>}):null}</div>

            <div className="addbttnContainer"><button className="addbttn" onClick={()=>handleAddClick()}>Add new Product</button></div>
        </div>
    )
    else
    return(
        <div className="bg-color1">
        <NavBarS/>
        <div className="profile-container">
          <div className="the-box">
          <form> <div class="row">
                  <img src={imagePreview || "https://i.pinimg.com/564x/ba/1b/3a/ba1b3a5b00239da009b9733a4a943326.jpg"} alt="image produit" 
                  className="product-image" />
                  <div>
                    <label className="custom-file-upload">
                      Cliquer Pour Ajouter Une Image
                      <input type="file" ref={imageInput} onChange={handleImageChange} className="image-input"/>
                    </label>
                  </div><br/><br/><br/>
                        <div>
                        <label for="name">Nom Du Produit </label><br/>
                          <input type="text"id="name" className="form-control" placeholder="Nom Du Produit" value={title}
                            onChange={(event) => setTitle(event.target.value)} />
                        </div><br/><br/><br/>
                        <div class="row">
                        <div class="col">
                        <label for="price">Prix Du Produit </label>
                        <div class="list-group-item d-flex justify-content-between lh-sm">
                          <input required type="number" id="price" value={price}
                            onChange={(event) => setPrice(event.target.value)} className="price"/>
                          <span class="text-muted" style={{position: 'absolute', left: '150px',top:'3px'}}>dt</span>
                        </div>
                        </div>
                        <div class="col">
                          <label for="nbr">Quantité</label><br/>
                          <input type="number" id="quantity" value={quantity}
                            onChange={(event) => setQuantity(event.target.value)} className="quantity"/>
                        </div></div><br/><br/><br/>
                        <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} 
                          placeholder="Description" onChange={(event) => setDescription(event.target.value)}></textarea>
                        </div><br/><br/><br/><br/><br/><br/><br/><br/>
                <button Type='submit' onClick={()=>{handleAddProduct();handleAddClick()}}>Ajouter Produit</button>
                <div className="addbttncontainer1" onClick={()=>handleAddClick()}><button className="addbttn">Retour</button></div>
                </div></form>
          </div>

        </div>
        </div>

    )
}
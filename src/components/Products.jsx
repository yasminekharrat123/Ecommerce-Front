import React from 'react'
import "./Cart.css"

export default class Product extends React.Component {

constructor(props){
    super(props);
    this.state={nbProduit:0,
    Fav:false,
    FavPage:Boolean(props.FavPage),
    OrdersPage:Boolean(props.OrdersPage),}
}




addNb=()=>{this.setState({nbProduit:this.state.nbProduit+1})}
removeNb=()=>{if (this.state.nbProduit > 0)  this.setState({nbProduit:this.state.nbProduit-1});}

render(){
if (this.state.OrdersPage)
    {return (
    <div className='product'>
        <div>
            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662655662/Croma%20Assets/Communication/Mobiles/Images/261979_oq7vjv.png/mxw_640,f_auto"></img>
        </div>
        
        <div className='description'>
        <h3>Iphone</h3>
        <p>descriptions:Iphone mech 3adi b soum hbel</p> 
        <p>Prix:</p>
        <div className='countHandler'>
            <button onClick={()=>{this.removeNb();}}>-</button>
            <input id="id1" defaultValue={this.state.nbProduit} value={this.state.nbProduit}
                     onChange={(e)=>{this.setState({nbProduit:Number(e.target.value)})}}  />
            <button onClick={()=>{this.addNb();}}>+</button>
        </div>
        </div>
    </div>
  )
}
else if(this.state.FavPage){
    return(
        <div className='product'>
        <div>
            <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662655662/Croma%20Assets/Communication/Mobiles/Images/261979_oq7vjv.png/mxw_640,f_auto"></img>
        </div>
        
        <div className='description'>
        <h3>Iphone</h3>
        <p>descriptions:Iphone mech 3adi b soum hbel</p> 
        <p>Prix:</p>
        <p >❤️</p>
        </div>
    </div>
    )
}




}

}

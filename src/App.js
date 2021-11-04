import './App.css';
import {useState} from 'react';


export default function App(){
  const cardetails = [
    {Title:"Fancy Product",Price:"$40.00-$80.00"},
    {Title:"Special Item",Price:"$18.00",stars:"⭐⭐⭐⭐⭐"},
    {Title:"Sale Item",Price:"$25.00"},
    {Title:"Popular Item",Price:"$40.00",stars:"⭐⭐⭐⭐⭐"},
    {Title:"Sale Item",Price:"$25.00"},
    {Title:"Fancy Product",Price:"$120.00-$280.00"},
    {Title:"Special Item",Price:"$18.00",stars:"⭐⭐⭐⭐⭐"},
    {Title:"Popular Item",Price:"$40.00",stars:"⭐⭐⭐⭐⭐"}]
    const [cartno,setCartno] = useState(0);
    
    const addc = () => {
      setCartno(cartno+1);
    }
    
    const removec = () => {
      if(cartno<=0){
        setCartno(0);
      }else{
      setCartno(cartno-1);
      }
    }

    return(
    <div className="App">
        <Title cartno={cartno}/>
        <ShopDisplay/>
        <section className="card-container">
            {cardetails.map((crd)=><ShopCard Title={crd.Title} Price={crd.Price} stars={crd.stars} addc={addc} removec={removec}/>)}
        </section>
    </div>
  )
}

function Title({cartno}){

  return(
      <div className="TitleC">
        <h3 className="boot"> Start Bootstrap</h3>
        <div className="has">
          <p>Home</p>
          <p>About</p>
          <div className="dropdown">
              <button className="dropbtn">Shop <i className="fas fa-caret-down"></i></button>
                <div className="dropdown-content">
                    <p>All Products</p>
                    <p>Popular Items</p>
                    <p>New Arrival</p>
                </div>
          </div>
        </div>
        <div className="cart-div">
        <button className="cart-button"><i className="fas fa-shopping-cart"></i> Cart <span className="cart-color"> {cartno} </span></button>
        </div>
      </div>


    
  )
}

function ShopDisplay(){
  return(
  <div className="shopdisplay">
    <h1>Shop in style</h1>
    <p>With this shop homepage display</p>
  </div>
  )
}

function ShopCard({Title,Price,stars,addc,removec}){
  let [count,setCount] = useState(0);
  const [c,setC] = useState(false);
  return(
    
    <div  className="shopcard">
      <div className="image-card">
        <h1>450 X 300</h1>
      </div>
      <div className="product-details">
        <h3>{Title}</h3>
        <p>{stars}</p>
        <p>{Price}</p>
      </div>
      <button className="add-cart" onClick={()=>{
        addc();
        setCount(count+1)
        if(count>=0){
          setC(true);
        }  
      }}>
        Add to Cart
      </button>
      {c ? <button class="remove-cart"onClick={()=>{
        removec();
        setCount(count-1);
        if(count<=1){
          setC(false);
        }
      
      }}>Remove from cart</button> : ""}
      

    </div>
  )
}



import "./page.scss"
import econca1 from '../assets/API/econ1.svg'
import pruduct from '../assets/API/Mask group.svg'
import econca2 from '../assets/API/econ2.svg'
import econca3 from '../assets/API/econ3.svg'
import econca4 from '../assets/API/econ4.svg'
import rasimsvg from '../assets/API/Vector (2).svg'
import rasimecon from "../assets/API/Meubel House_Logos-05.svg"
import { NavLink } from "react-router-dom"
import { useState } from "react"
const Corzinka = () => {
  const[count,setCount]=useState(0)

  let sum = 2500000
  let sum1 = sum * count
 const increment =()=>{
  setCount(count + 1)
 }
 
 const dec =() =>{
  setCount(count - 1)
 }
 







  return (
    <>
    <div className="heroshop">
        <div className="container">
    <div className="navbarr">
        <img src={ rasimecon} alt="" />
        <h2>Cart</h2>
        <div className='header_linklar'>
          <NavLink className="herolink1" to={'/'}>
             Home
             </NavLink>
             <img src={rasimsvg} alt="" />
             <NavLink className="herolink2" to={'corzinka'}>
             Cort
             </NavLink>
          </div>
    </div>
        </div>


    </div>

<div className="catpagee">
<div>
<div className="container">
<div className="titlee">
<p>Product</p>
<p>Price</p>
<p>Quantity</p>
<p>Subtotal</p>
</div>
</div>
<div className="container">
  <div className="cenas">
   <div className="pruducname">
   <img className="pruductcart" src={ pruduct} alt="" />
   <p>Asgaard sofa</p>
   <p>Rs. 250,000.00</p>
   </div>
    <div className="btn_gred">
    <button style={{padding:'4px 16px'}} disabled={count <= 0}onClick={dec} >-</button>
      <button style={{padding:'4px 16px'}}>{count}</button> 
      <button style={{padding:'4px 16px'}} onClick={increment}>+</button>
    </div>
    <h2 className="cena">Rs.{sum1}</h2>

  </div>
</div>

</div>
<div className="card_carta">

<h4>Cart Totals</h4>
<h2 className="narxi"><span>Subtotal</span>  Rs.{sum1}</h2>

<p><span>Total</span>   Rs. 250,000.00</p>
<button className="chek">Check Out</button>
</div>
</div>
    <div className='cardblokk'>
     
     <div className="container bigoo">
     <div className='econs'> 
      <div>
      <img src={econca1} alt="" /> 
      </div>
       <div>
       <h4>High Quality
         <p>crafted from top materials</p>
       </h4>
      </div>
     </div>
     <div className='econs'>
       <img src={econca2} alt="" />
       <div>
       <h4>High Quality
         <p>crafted from top materials</p>
       </h4>
      </div>
     </div>
     <div className='econs'>
       <img src={econca3} alt="" />
       <div>
       <h4>High Quality
         <p>crafted from top materials</p>
       </h4>
      </div>
       </div>
     <div className='econs'>
       <img src={econca4} alt="" />
       <div>
       <h4>High Quality
         <p>crafted from top materials</p>
       </h4>
      </div>
       </div>
     </div>
   </div>

    </>
  )
}

export default Corzinka
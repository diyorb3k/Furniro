import { Link, NavLink } from 'react-router-dom'
import rasimsvg from '../assets/API/Vector (2).svg'
import rasimecon from '../assets/API/system-uicons_filtering.svg'
import rasimecon2 from '../assets/API/ci_grid-big-round.svg'
import rasimecon3 from '../assets/API/bi_view-list.svg'
import rasimecon4 from '../assets/API/Line 5.svg'
import econca1 from '../assets/API/econ1.svg'
import econca2 from '../assets/API/econ2.svg'
import econca3 from '../assets/API/econ3.svg'
import econca4 from '../assets/API/econ4.svg'

import './page.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import heroimg from "../assets/Shopimg heroo/heromimg.png"

const Shop = () => {

  const [albom, setAlbom] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4005/products")
      .then((res) => {
        setAlbom(res?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const card = albom
    ?.filter((user) => user.body.toLowerCase().includes(query.toLowerCase()))
    ?.map((el) => {
      console.log(el);
      return (
        <div className="form card" key={el.id}>
          <Link to={`/corzinka/${el?.id}`}><p class="text">Add to cart</p></Link>
          <img className="APIimg" src={el?.img} alt="is not Defaunt" />
           <Link to={`/Singilpage/${el?.id}`}><p className="titled">{el.title.slice(0, 95)}</p></Link>
          <span>{el.body}</span>
          <div className="istoriyaiiscena">
            <p>{el.narxi}</p>
            <del>{el.istoriya}</del>
          </div>
          <div className="floyd"></div>
        </div>
      );
    });











  return (
   <>
  <div className='heroshop'>
    <div className='container'>
    <form className="formField" action="">
          <input className="inputt" type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
        </form>
    <h3 className='shop'>Shop</h3>
          <div className='header_link'>
          <NavLink className="herolink1" to={'/'}>
             Home
             </NavLink>
             <img src={rasimsvg} alt="" />
             <Link className="herolink2" to={'/Shop/'}>
             shop
             </Link>
          </div>

    </div>
    
  </div>
  <div className='struktura'>
  <div className='container'>
    <div className='tex_hero'>
    <div className='felter'>
    <img src={rasimecon} alt="" />
    <p>Filter</p>
    <img className='heroimg3' src={rasimecon2} alt="" />
    <img className='heroimg1' src={rasimecon3} alt="" />
    <img className='heroimg2' src={rasimecon4} alt="" />
    <span>Showing 1–16 of 32 results</span>
    </div>
    <div className='hero_title'>
      <div className='number_num'>
        <p>Show</p>
        <div className='number'>
          16
        </div>
      </div>
      <div className='short'>
      <p>Short by</p>
        <div className='number2'>
        Default
        </div>
      </div>
    </div>
    </div>
    
  </div>
  
  </div>
  <div className='container'>
  <div className='carid'>
      {card}
    </div>
    <div className='number1234'>
      <div className='number1'>1</div>
      <div className='number2'>2</div>
      <div className='number3'>3</div>
      <div className='number4'>Next</div>
    </div>



   

  </div>

  <div className='econt'>
    <div className='container'>
    <div className='cardblokk'>
     
     <div className='econs'> 
       <img src={econca1} alt="" /> 
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
  </div>
   </>
  )
}

export default Shop
import { Link, NavLink } from "react-router-dom" 
import './Header.css'
import exampleImage from '../assets/Frame 168.svg';
import exampleImage2 from '../assets/mdi_account-alert-outline.svg';
import exampleImage3 from '../assets/akar-icons_search.svg';
import exampleImage4 from '../assets/akar-icons_heart.svg';
import exampleImage5 from '../assets/ant-design_shopping-cart-outlined (1).svg';



const Header = () => {
  return (
    
    <div className="container bigo">
    <div>
        <NavLink to="/"><img src={exampleImage} alt="" /></NavLink>
    </div>
    <div className="navbar_link">
        <NavLink className="navbarlink" to="/">Home</NavLink>
        <NavLink className="navbarlink" to="/shop">Shop</NavLink>
        <NavLink className="navbarlink" to="/About">About</NavLink>
        <NavLink className="navbarlink" to="/contact">Cont</NavLink>
    </div>
    <div className="imggg">
      <img src={exampleImage2} alt="" />
      <form>
	<label for="search">Search</label>
	<input required="" pattern=".*\S.*" type="search" class="input" id="search"/>
	<span class="caret"></span>
</form>
      <img src={exampleImage4} alt="" />
      <img src={exampleImage5} alt="" />
    </div>
    </div>
  )
}

export default Header
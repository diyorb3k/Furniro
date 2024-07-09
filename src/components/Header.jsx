import { Link, NavLink } from "react-router-dom";
import './Header.css';
import exampleImage from '../assets/Frame 168.svg';
import exampleImage2 from '../assets/mdi_account-alert-outline.svg';
import exampleImage3 from '../assets/akar-icons_search.svg';
import exampleImage4 from '../assets/akar-icons_heart.svg';
import { SlBasket } from "react-icons/sl";

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
        <NavLink className="navbarlink" to="/contact">Contact</NavLink>
      </div>
      <div className="imggg">
        <div className="group"></div>
        <img src={exampleImage2} alt="" />
        <img src={exampleImage3} alt="" />
        <img src={exampleImage4} alt="" />
        <Link to="corzinka/2"><SlBasket/></Link>
      </div>
    </div>
  );
}

export default Header;

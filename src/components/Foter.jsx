import { Link, NavLink } from "react-router-dom";
import '../components/Header.css'
import "../page/page.scss";
import About from "../page/About";
import Shop from "../page/Shop";
const Foter = () => {
  return (
    <div className="container">
      <div className="foter_nav">
        <nav className="foter_navbar">
            <ul className="ul_1">
                <h4>Funiro.</h4>
                <p>400 University Drive Suite 200 Coral <br /> Gables,<br />
                FL 33134 USA</p>
            </ul>
            <ul className="ul_2">
                <li>Links</li>
             <NavLink className="heder_link" to={'/'}>
             Home
             </NavLink>
             <NavLink className="heder_link" to={'Shop'}>
             shop
             </NavLink>
             <NavLink className="heder_link" to={'About'}>
             About
             </NavLink>
             <NavLink  className="heder_link" to={'contact'}>
             Contact
             </NavLink>
            </ul>
            <ul className="ul_3">
              <li>Help</li>
              <p>Payment Options</p>
              <p>Returns</p>
              <p>Privacy Policies</p>
            </ul>

            <ul className="ul_4">
              <li className="LIST">Newsletter</li>
            
             <div className="btninput">
             <div className="form-control">
      <input type="text" id="username"  />
      <label htmlFor="username" className="animated-label">
        <span className="span_1">E</span>
        <span className="span_1">n</span>
        <span className="span_1">t</span>
        <span className="span_1">e</span>
        <span className="span_1">r</span>
        <span className="span_1">Y</span>
        <span className="span_1">o</span>
        <span className="span_1">u</span>
        <span className="span_1">r</span>
        <span className="span_1">E</span>
        <span className="span_1">m</span>
        <span className="span_1">a</span>
        <span className="span_1">i</span>
        <span className="span_1">l</span>
        <span className="span_1">.</span>
        <span className="span_1">.</span>
        <span className="span_1">.</span>
        <span className="span_1">.</span>
        <span className="span_1">.</span>
        <span className="span_1"></span>
        <span className="span_1"></span>
      </label>
               </div>
              <button className="input_btni">SUBSCRIBE</button>
             </div>
               
            </ul>
        </nav>
      </div>
      <hr />
      <p className="novigod">2023 furino. All rights reverved</p>
    </div>
  );
};

export default Foter;

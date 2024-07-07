import "./page.scss";
import "../components/Header.css";
import exampleImage1 from "../assets/Mask Group (3).png";
import exampleImage2 from "../assets/Image-living room (1).png";
import exampleImage3 from "../assets/Mask Group (4).png";
import exampleImagerasim2 from "../assets/API/Rectangle 24.png";
import exampleImagerasim3 from "../assets/API/Rectangle 25.png";
import exampleImagerasim4 from "../assets/API/Rectangle 26.png";
import exampleImagerasim6 from "../assets/API/Vector 1.svg";
import exampleImagerasim7 from "../assets/API/Right 24px.svg";
import rasim1 from "../assets/API/rasim1.png";
import rasim2 from "../assets/API/rasim2.png";
import rasim3 from "../assets/API/rasim3.png";
import rasim4 from "../assets/API/rasim4.png";
import rasim5 from "../assets/API/rasim5.png";
import rasim6 from "../assets/API/rasim6.png";
import rasim7 from "../assets/API/rasim7.png";
import rasim8 from "../assets/API/rasim8.png";
import rasim9 from "../assets/API/rasim9.png";
import { useState, useEffect } from "react";
import axios from "axios";
import "../assets/API/API1.png";
import "../assets/API/API2.png";
import "../assets/API/API3.png";
import "../assets/API/API4.png";
import "../assets/API/API5.png";
import "../assets/API/API6.png";
import "../assets/API/Api7.png";
import "../assets/API/Api8.png";

const Home = () => {
  const [albom, setAlbom] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:4005/user")
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
        <div className="form" key={el.id}>
          <img className="APIimg" src={el?.img} alt="is not Defaunt" />
          <p className="titled">{el.title.slice(0, 95)}</p>

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
      <div className="home">
        <div className="container">
        <form className="formField" action="">
          <input className="inputt" type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} />
        </form>
          <div className="card_hero">
            <p>New Arrival</p>
            <h1>Discover Our New Collection</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </span>
            <br />
            <button>BUY Now</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="herobutontex">
          <h4>Browse The Range</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="imglar">
          <div>
            <img src={exampleImage1} alt="" />
            <p>Dining</p>
          </div>
          <div>
            <img src={exampleImage2} alt="" />
            <p>Living</p>
          </div>
          <div>
            <img src={exampleImage3} alt="" />
            <p>Bedroom</p>
          </div>
        </div>
        <div>
          <h4 className="our">Our Products</h4>
        </div>
      </div>
      <div className="container ">
        <div className="cartalr">{card}</div>
        <button className="btnshow">Show More</button>
      </div>
      <div className="foter_top">
        <div className="container">
          <div className="container">
            <div className="foter_top">
              <div>
                <h4>50+ Beautiful rooms inspiration</h4>
                <p>
                  Our designer already made a lot of beautiful prototipe of
                  rooms that inspire you
                </p>
                <button>Explore More</button>
                <div className="modal">
                  <p>01 - Bed Room</p>
                  <span>Inner Peace</span>
                </div>
                <butto className="btnecon">
                  <img src={exampleImagerasim6} alt="" />
                </butto>
              </div>
              <div className="imgcrd">
                <img className="example" src={exampleImagerasim2} alt="" />
                <img src={exampleImagerasim3} alt="" />
                <img src={exampleImagerasim4} alt="" />
              </div>
            </div>
            <div className="caruseleson">
              <img className="econ" src={exampleImagerasim7} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
       <div className="your">
       <p>Share your setup with</p>
       <h4>#FuniroFurniture</h4>
       </div>
       <div className="imgcards">
        <img className="rasim1" src={rasim1} alt="" />
        <img className="rasim2" src={rasim2} alt="" />
        <img className="rasim3" src={rasim3} alt="" />
        <img className="rasim4" src={rasim4} alt="" />
        <img className="rasim5"  src={rasim5} alt="" />
        <img className="rasim6"  src={rasim6} alt="" />
        <img className="rasim7"  src={rasim7} alt="" />
        <img className="rasim8"  src={rasim8} alt="" />
        <img className="rasim9"  src={rasim9} alt="" />
       </div>
      </div>
      <div className="namew"></div>

    </>
  );
};

export default Home;

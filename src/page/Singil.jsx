import axios from "axios";
import rasimsvg from "../assets/API/Vector (2).svg";
import yulduzcha from "../assets/API/Group 88.svg";
import ckol from "../assets/API/Rectangle 42.svg";
import ckol1 from "../assets/API/Rectangle 43.png";
import ckol2 from "../assets/API/Rectangle 44.svg";
import { Link } from "react-router-dom";
import "./page.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Singil = () => {
  const { id } = useParams();
  const [single, setSingle] = useState(null);
  console.log(single);
  useEffect(() => {
    axios
      .get(`http://localhost:4005/user/${id}`)
      .then((res) => {
        setSingle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const [count, setCount] = useState(0);

  let sum = 2500000;
  let sum1 = sum * count;
  const increment = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return (
    <>
      

      <div className="heroo">
        <div className="container">
          <div className="">
            <div className="headerlinklar">
              <Link className="herolinklar" to={"/"}>
                Home
              </Link>
              <img src={rasimsvg} alt="" />
              <Link className="herolink2" to={"Shop"}>
                shop
              </Link>
              <img className="imgd" src={rasimsvg} alt="" />|
              <p> Asgaard sofa</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container Commit">
        <div>
          <img className="imgrasim" src={single?.img} alt="" />
        </div>
        <div className="textcommit">
          <h4>Asgaard sofa</h4>
          <h2 className="c">Rs.{sum1}</h2>
          <div className="comitariya">
            <img src={yulduzcha} alt="" />|<p>5 Customer Review</p>
          </div>
          <p>
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </p>
          <p className="size">Size</p>
          <div className="bar">
          <div className="barl1">L</div>
          <div className="barl2">XL</div>
          <div className="barl3">XS</div>
          </div>
          <p className="colorw">Color</p>
             

          <div className="colors">
          <img src={ckol} alt="" /> 
           <img src={ckol1} alt="" />
           <img src={ckol2} alt="" />
            </div>



           <div className="btngrupa">
           <div className="btn_gred layt">
        <button  className="btnminus"
          style={{  }}
          disabled={count <= 0}
          onClick={dec}
        >
          -
        </button>
        <div className="btnn1"  style={{  }}>{count}</div>
        <button className="btnn2" style={{  }} onClick={increment}>
          +
        </button>
          </div>
             <button className="add">Add To Cart</button>
             <button className="add">+ Compare</button>
           </div>
        </div>
        
      </div>
    </>
  );
};

export default Singil;

import "./App.css";
import {} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Header from "./components/Header";
import Cantact from "./page/Cantact";
import Shop from "./page/Shop";
import Foter from "./components/Foter";
import Corzinka from "./page/Corzinka.jsx";
import Singil from "./page/Singil.jsx";

const App = () => {
  return <Router>
    <Header/>
   <main>
   <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/About" element={<About/>}/>
     <Route  path="/contact" element={<Cantact/>}/>
     <Route  path="/shop/"element={<Shop/>}/>
     <Route  path="/corzinka/:id" element={<Corzinka/>}/>
     <Route  path="/Singilpage/:id" element={<Singil/>}/>
      </Routes>
   </main>
   <Foter/>
  </Router>;
};

export default App;

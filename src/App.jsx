import "./App.css";
import {} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Header from "./components/Header";
import Cantact from "./page/Cantact";
import Shop from "./page/Shop";
import Foter from "./components/Foter";

const App = () => {
  return <Router>
    <Header/>
   <main>
   <Routes>
     <Route  path="/" element={<Home/>}/>
     <Route  path="/About" element={<About/>}/>
     <Route  path="/contact" element={<Cantact/>}/>
     <Route  path="/shop" element={<Shop/>}/>
      </Routes>
   </main>
   <Foter/>
  </Router>;
};

export default App;

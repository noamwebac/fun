import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
//import { store } from "./Store"; 
import { Home } from "./Pages/Home";
import { Aide } from "../src/Pages/AIde";
import { Motoculture } from "./Pages/Motoculture";
import { Lidl } from "./Pages/Lidl";
import { Partenaire } from "./Pages/Partenaire";


function App() {
  return (
    //<Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Aide" element={<Aide/>}/>
          <Route path="/Motoculture" element={<Motoculture/>}/>
          <Route path="/Lidl" element={<Lidl/>}/>
          <Route path="/Partenaire" element={<Partenaire/>}/>
        </Routes>
      </BrowserRouter>
    //</Provider>
  );
}

export default App;

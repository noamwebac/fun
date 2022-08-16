import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Aide } from "../src/Pages/AIde";
import { Motoculture } from "./Pages/Motoculture";
import { Lidl } from "./Pages/Lidl";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aide" element={<Aide/>}/>
        <Route path="/Motoculture" element={<Motoculture/>}/>
        <Route path="/Lidl" element={<Lidl/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

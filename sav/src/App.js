import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Home } from "./Pages/Home";
import { Aide } from "../src/Pages/AIde"; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Aide" element={<Aide/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import NavbarSecond from "./components/NavbarSecond/NavbarSecond";
import Hero from "./components/hero/Hero";
import TravelAgency from "./components/travelAgency/TravelAgency";


function App() {
  return (
    <div className="App">
      <NavbarSecond />
      <div className="container">
        <Hero />
        <TravelAgency />
      </div>
    </div>
  );
}

export default App;

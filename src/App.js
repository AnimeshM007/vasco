import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import NavbarSecond from "./components/NavbarSecond/NavbarSecond";
import Hero from "./components/hero/Hero";
import TravelAgency from "./components/travelAgency/TravelAgency";
import ExploringTheWorld from "./components/exploringTheWorld/exploringTheWorld";
import HowItWorks from "./components/howItWorks/howItWorks";
import WhyUs from "./components/whyUs/WhyUs";

function App() {
  return (
    <div className="App">
      <NavbarSecond />
      <div className="container">
        <Hero />
        <TravelAgency />
        <ExploringTheWorld />
        <HowItWorks />
        <WhyUs />
      </div>
    </div>
  );
}

export default App;

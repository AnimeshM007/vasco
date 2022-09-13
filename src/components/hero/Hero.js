import React from "react";
import classes from "./hero.module.css";
import HeroIneteractions from "./HeroInteractions";

function Hero() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.image}></div>
      <HeroIneteractions />
    </div>
  );
}

export default Hero;

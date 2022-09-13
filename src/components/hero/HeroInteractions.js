import React from "react";
import classes from "./HeroInteractions.module.css";

function HeroIneteractions() {
  return (
    <div className={classes.wrapper}>
        <div className={classes.image}></div>
      <div className={classes.headline}>
        <h1>
          Craft your trips with
          <br />
          locals <span className={classes.yellow}>in minutes</span>
        </h1>
      </div>
      <div className={classes.subhead}>
        Where do you want to go?
      </div>
      <div className={classes.search}>

      </div>
    </div>
  );
}

export default HeroIneteractions;

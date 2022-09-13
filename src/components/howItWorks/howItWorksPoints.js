import classes from "./howItWorksPoints.module.css";

function HowItWorksPoints() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.number}>1</div>
      <div className={classes.text}>
        <span className={classes.yellow}>Tell us</span> what you look for in your dream trip (style, personal needs,
        budget, and desires)
      </div>
    </div>
  );
}

export default HowItWorksPoints;

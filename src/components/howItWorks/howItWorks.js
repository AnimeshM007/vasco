import classes from "./howItWorks.module.css";
import HowItWorksPoints from "./howItWorksPoints";

function HowItWorks() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.heading}>How it works?</div>
      <div className={classes.pointsWrapper}>
        <HowItWorksPoints />
        <HowItWorksPoints />
        <HowItWorksPoints />
        <HowItWorksPoints />
      </div>
      <button className={classes.button}>Plan my trip!</button>
    </div>
  );
}

export default HowItWorks;

import classes from "./WhyUs.module.css";
import Point from "./Point";

function WhyUs() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.headingWrapper}>
        <h1 className={classes.heading}>Why you need Vasco?</h1>
      </div>
      <div className={classes.points}>
        <div className={classes.horizontalRow}>
          <div className={classes.verticalRow}>
            <Point />
            <Point />
          </div>
          <div className={classes.verticalRow}>
            <Point />
            <Point />
          </div>
        </div>
        <div className={classes.verticalRow}>
          <Point />
        </div>
      </div>
      <button className={classes.button}>Plan my trip!</button>
      <div className={classes.image1}></div>
      <div className={classes.image2}></div>
    </div>
  );
}

export default WhyUs;

import classes from "./exploringTheWorld.module.css";

function ExploringTheWorld() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.darkGradient}>
        <h2 className={classes.subhead}>
          We believe nothing is more happier than
        </h2>
        <h1 className={classes.heading}><span className={classes.yellow}>Exploring </span> the World</h1>
      </div>
    </div>
  );
}

export default ExploringTheWorld;

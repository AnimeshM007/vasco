import classes from "./Point.module.css";

function Point() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.icon}><img src="D:\cp\Avinash\VASCO_Website\vasco\public\images\icons\bx_time-five.svg" width="60" height="60" /></div>
      <div className={classes.text}>
        <span classname={classes.bold}>Save hours</span>
        <span className={classes.normal}> of planning</span>
      </div>
    </div>
  );
}

export default Point;

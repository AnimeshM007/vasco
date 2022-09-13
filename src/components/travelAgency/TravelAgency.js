import classes from "./TravelAgency.module.css";

function TravelAgency() {
  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridItem1} id="1">
        Why Choose traditional travel agency?
      </div>
      <div className={classes.gridItem2} id="2">
        When you can go truly local!
      </div>
      <div className={classes.gridItem3} id="3"></div>
      <div className={classes.gridItem4} id="4">
        Mustafa for Dubai 🇦🇪
      </div>
      <div className={classes.gridItem5} id="5">
        <ul>
          <li>Native</li>
          <li>Specializes in middle eastern trips</li>
          <li>Planned 100+ satisfactory trips to Dubai</li>
        </ul>
      </div>
      <div className={classes.gridItem6} id="6"></div>
    </div>
  );
}

export default TravelAgency;

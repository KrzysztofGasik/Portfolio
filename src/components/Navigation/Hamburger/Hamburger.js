import classes from "./Hamburger.module.css"

export default function Hamburger({ onClick }) {
  return (
    <div className={classes.Icon} onClick={onClick}>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
      <div className={classes.Line}></div>
    </div>
  );
}

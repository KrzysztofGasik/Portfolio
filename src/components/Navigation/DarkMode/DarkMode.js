import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { ThemeContext } from "../../../store/theme-context";

import classes from "./DarkMode.module.css";

export default function DarkMode() {
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;
  const toggleTheme = useContext(ThemeContext).toggleTheme;
  const buttonClasses = isDarkTheme
    ? `${classes.Button} ${classes.ButtonDark}`
    : classes.Button;
  const buttonDotClasses = isDarkTheme
    ? `${classes.ButtonDotActive} ${classes.ButtonDot}`
    : classes.ButtonDot;
  return (
    <div className={classes.Wrapper}>
      <div onClick={toggleTheme} className={buttonClasses}>
        <div className={buttonDotClasses}>
          <FontAwesomeIcon
            icon={isDarkTheme ? faSun : faMoon}
            className={classes.Icon}
          />
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-scroll";
import { useContext } from "react";

import { ThemeContext } from "../../../store/theme-context";
import DarkMode from "../DarkMode/DarkMode";

import classes from "./NavigationList.module.css";

const navigationElements = [
  "Home",
  "Last project",
  "Skills",
  "Projects",
  "Contact"
];

const NavigationList = ({ hidden }) => {
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;
  let menuListIsDark = isDarkTheme ? classes.LinksDark : classes.Links;
  let menuListIsOpen = hidden
    ? `${classes.Links} ${classes.LinksOpen}`
    : classes.Links;
  let menuListJoin = [menuListIsDark, menuListIsOpen];
  return (
    <ul className={menuListJoin.join(" ")}>
      {navigationElements.map(element => {
        return (
          <li
            key={element}
            className={hidden ? `${classes.LinkElement} ${classes.Fade}` : classes.LinkElement}
          >
            <Link
              to={element}
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}
              className={classes.Anchor}
            >
              {element}
            </Link>
          </li>
        );
      })}
      <DarkMode />
    </ul>
  );
};

export default NavigationList;

import { useContext } from "react";

import {ThemeContext} from "../../../store/theme-context"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./SocialElement.module.css"

export default function SocialElement({ href, icon, iconClass }) {
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;
  const anchorClasses = isDarkTheme ? `${classes.AnchorDark} ${classes.Anchor}` : classes.Anchor
  return (
    <li>
      <a href={href} className={anchorClasses}>
        <FontAwesomeIcon icon={icon} className={iconClass}/>
      </a>
    </li>
  );
}

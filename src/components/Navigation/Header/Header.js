import { useState, useEffect, useContext } from "react";

import { ThemeContext } from "../../../store/theme-context";
import NavigationList from "../NavigationList/NavigationList";
import Hamburger from "../Hamburger/Hamburger";
import CloseIcon from "../CloseIcon/CloseIcon";

import classes from "./Header.module.css";

const Header = () => {
  const [navVisibility, setNavVisibility] = useState(false);
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;

  const switchMenu = () => setNavVisibility(!navVisibility);

  useEffect(() => {
    function hideMenu() {
      if (window.innerWidth > 800) {
        setNavVisibility(false);
      }
    }
    window.addEventListener("resize", hideMenu);
  }, [navVisibility]);
  let headerClasses = isDarkTheme
    ? `${classes.Header} ${classes.HeaderDark} `
    : classes.Header;
  return (
    <header className={headerClasses}>
      <a
        href="https://www.linkedin.com/in/krzysztof-gasik"
        className={classes.Profile}
      >
        Krzysztof Gasik
      </a>
      <Hamburger onClick={switchMenu} />
      <nav className={classes.Nav}>
        <NavigationList hidden={navVisibility} />
        <CloseIcon onClick={switchMenu} hidden={navVisibility} />
      </nav>
    </header>
  );
};

export default Header;

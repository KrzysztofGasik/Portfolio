import { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../store/theme-context";
import gsap from "gsap";

import { ReactComponent as WelcomeImage } from "../../images/welcome.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./Welcome.module.css";

export default function Welcome() {
  const welcomeWrapper = useRef(null);
  const imageWrapper = useRef(null);
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;

  useEffect(() => {
    const isMobile = navigator.maxTouchPoints > 0;
    const containerOffsetVal = isMobile ? 5 : 200;

    const containerElement = welcomeWrapper.current;
    const [imageElements] = imageWrapper.current.children;
    const reactLogo = imageElements.getElementById("React");
    const jsLogo = imageElements.getElementById("JS");

    gsap.set(containerElement, { autoAlpha: 0 });
    gsap.set([reactLogo, jsLogo], { autoAlpha: 0 });

    const timeLine = gsap.timeline();
    timeLine
      .fromTo(
        containerElement,
        { x: `+=${containerOffsetVal}` },
        { x: "0", autoAlpha: 1, duration: 1 },
        "+=1"
      )
      .fromTo(
        reactLogo,
        { y: "-=500" },
        { y: "0", autoAlpha: 1, ease: "Sine.easeOut" }
      )
      .fromTo(
        jsLogo,
        { y: "+=500" },
        { y: "0", autoAlpha: 1, ease: "Sine.easeOut" }
      );
  }, []);
  const wrapperClasses = isDarkTheme
    ? `${classes.Wrapper} ${classes.WrapperDark}`
    : classes.Wrapper;
  const leftSideClasses = isDarkTheme
    ? `${classes.LeftSide} ${classes.LeftSideDark}`
    : classes.LeftSide;
  return (
    <div className={wrapperClasses} id="Home" ref={welcomeWrapper}>
      <div className={leftSideClasses}>
        <h1 className={classes.Heading}>
          I'm bringing your designs to reality
        </h1>
        <div className={classes.GetInTouch}>
          <FontAwesomeIcon
            icon={faHandshake}
            className={classes.HandshakeIcon}
          />
          <p>Let's get to know each other</p>
        </div>
        <FontAwesomeIcon className={classes.ArrowIcon} icon={faArrowDown} />
      </div>
      <div className={classes.RightSide} ref={imageWrapper}>
        <WelcomeImage />
      </div>
    </div>
  );
}

import { React, useRef, useEffect } from "react";
import gsap from "gsap";
import { ReactComponent as WelcomeImage } from "../../images/welcome.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Welcome() {
  const welcomeWrapper = useRef(null);
  const imageWrapper = useRef(null);

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

  return (
    <div className="welcome__wrapper" id="Home" ref={welcomeWrapper}>
      <div className="welcome__leftSide">
        <h1>I'm bringing your designs to reality</h1>
        <div className="welcome__getInTouch">
          <FontAwesomeIcon icon={faHandshake} className="handshake" />
          <p>Let's get to know each other</p>
        </div>
        <FontAwesomeIcon
          className="welcome__handshakeIcon"
          icon={faArrowDown}
        />
      </div>
      <div className="welcome__rightSide" ref={imageWrapper}>
        <WelcomeImage className="welcome__image" />
      </div>
    </div>
  );
}

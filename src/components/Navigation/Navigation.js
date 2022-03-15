import { useEffect, useRef } from "react";
import gsap from "gsap";

import Header from "./Header/Header";
import classes from "./Navigation.module.css"

function Navigation() {
  const container = useRef(null);

  useEffect(() => {
    const element = container.current;
    gsap.set(element, { autoAlpha: 0 });
    const timeLine = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    timeLine.fromTo(
      element,
      { x: "-=500" },
      { x: "0", autoAlpha: 1, duration: 1 }
    );
  }, []);

  return (
    <div className={classes.Wrapper} ref={container}>
      <Header />
    </div>
  );
}

export default Navigation;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import Hamburger from "./Hamburger";
import CloseIcon from "./CloseIcon";

function Navigation() {
  const [toggle, setSwitch] = useState(false);

  const switchMenu = () => {
    setSwitch(!toggle);
  };

  useEffect(() => {
    function hideMenu() {
      if (window.innerWidth > 800) {
        setSwitch(false);
      }
    }
    window.addEventListener("resize", hideMenu);
  }, [toggle]);

  const navigationElements = [
    "Home",
    "Project",
    "Skills",
    "Projects",
    "Contact",
  ];


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
    <div className="navigation__container" ref={container}>
      <header>
        <a href="https://www.linkedin.com/in/krzysztof-gasik">
          Krzysztof Gasik
        </a>
        <Hamburger onClick={switchMenu} />
        <nav>
          <ul
            className={toggle ? "open navigation__links" : "navigation__links"}
          >
            {navigationElements.map((element) => {
              return (
                <li key={element} className={toggle ? "fade" : ""}>
                  <Link
                    to={element}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={400}
                  >
                    {element}
                  </Link>
                </li>
              );
            })}
          </ul>
          <CloseIcon onClick={switchMenu} />
        </nav>
      </header>
      {/* <SocialIcons /> */}
    </div>
  );
}

export default Navigation;

import { useRef, useEffect, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThemeContext } from "../../store/theme-context";

import SkillsList from "./SkillsList/SkillsList";

import classes from "./Skills.module.css";

export default function Skills() {
  const skillWrapper = useRef(null);
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;

  useEffect(() => {
    const wrapper = skillWrapper.current;
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(wrapper, { autoAlpha: 0 });

    const timeLine = gsap.timeline();
    timeLine.fromTo(
      wrapper,
      { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
      {
        clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%)",
        autoAlpha: 1,
        duration: 1,
        ease: "Power2.easeInOut",
        scrollTrigger: {
          trigger: "#Skills",
          start: "top bottom",
          end: "+=500",
          scrub: 1
        }
      }
    );
  }, []);
  const sectionClasses = isDarkTheme
    ? `${classes.Wrapper} ${classes.WrapperDark}`
    : classes.Wrapper;

  return (
    <section className={sectionClasses} id="Skills" ref={skillWrapper}>
      <SkillsList />
    </section>
  );
}

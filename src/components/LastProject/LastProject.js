import { useRef, useEffect, useContext } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ThemeContext } from "../../store/theme-context";

import projectImg from "../../images/tvpuls.jpg";

import classes from "./LastProject.module.css";

export default function LastProject() {
  const leftCol = useRef(null);
  const rightCol = useRef(null);
  const isDark = useContext(ThemeContext).isDarkTheme;

  useEffect(() => {
    const isMobile = navigator.maxTouchPoints > 0;
    const startPosition = isMobile ? { y: -300 } : "center center";
    const leftColElements = leftCol.current;
    const rightColElements = rightCol.current;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(leftColElements, { autoAlpha: 0 });
    gsap.set(rightColElements, { autoAlpha: 0 });

    const timeLine = gsap.timeline();
    timeLine
      .fromTo(
        leftColElements,
        { x: "-=10" },
        {
          x: "0",
          autoAlpha: 1,
          duration: 1,
          ease: "Power2.easeInOut",
          scrollTrigger: {
            trigger: leftColElements,
            start: startPosition,
            end: "+=300",
            scrub: 1,
          },
        }
      )
      .fromTo(
        rightColElements,
        { x: "+=10" },
        {
          x: "0",
          autoAlpha: 1,
          duration: 1,
          ease: "Power2.easeInOut",
          scrollTrigger: {
            trigger: rightColElements,
            start: startPosition,
            end: "+=300",
            scrub: 1,
          },
        }
      );
  }, []);

  const classesSection = isDark
    ? `${classes.Section} ${classes.SectionDark}`
    : classes.Section;
  const classesTitle = isDark
    ? `${classes.Title} ${classes.TitleDark}`
    : classes.Title;
  const classesLink = isDark
    ? `${classes.Link} ${classes.LinkDark}`
    : classes.Link;
  const classesDescription = isDark
    ? `${classes.Description} ${classes.DescriptionDark}`
    : classes.Description;
  return (
    <section className={classesSection} id="Last project">
      <div className={classes.ColumnLeft} ref={leftCol}>
        <div className={classes.Wrapper}>
          <p className={classesTitle}>Last Project</p>
          <a href="https://tvpuls.pl" className={classesLink}>
            tvpuls.pl
          </a>
          <p className={classesDescription}>
            New version of website, custom theme using lazy loading, owl
            carousel, css grid and flexbox.
          </p>
        </div>
      </div>
      <div className={classes.ColumnRight} ref={rightCol}>
        <img src={projectImg} alt="" />
      </div>
    </section>
  );
}

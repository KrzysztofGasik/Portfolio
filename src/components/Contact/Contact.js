import { useRef, useEffect, useContext } from "react";
import gsap from "gsap";

import { ThemeContext } from "../../store/theme-context";

import { ReactComponent as Social } from "../../images/social.svg";
import SocialList from "./SocialList/SocialList";

import projectClasses from "../Projects/ProjectsList/ProjectsList.module.css";
import classes from "./Contact.module.css";

export default function Contact() {
  const socialWrapper = useRef(null);
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;
  const footerClasses = isDarkTheme
    ? `${classes.FooterDark} ${classes.Footer}`
    : classes.Footer;
  useEffect(() => {
    const [imageElements] = socialWrapper.current.children;
    const person = imageElements.getElementById("person");
    const fb = imageElements.getElementById("fb");
    const linkedin = imageElements.getElementById("linkedin");
    const twitter = imageElements.getElementById("twitter");

    gsap.set(
      [
        ...person.children,
        ...fb.children,
        ...linkedin.children,
        ...twitter.children
      ],
      { autoAlpha: 0 }
    );

    const timeLine = gsap.timeline();

    const startAnimation = () => {
      const last = document.querySelector(`.${projectClasses.Last}`);
      if (window.scrollY > last.offsetTop) {
        runAnimation();
        document.removeEventListener("scroll", startAnimation);
      } else {
        return false;
      }
    };

    document.addEventListener("scroll", startAnimation);

    const runAnimation = () => {
      timeLine
        .fromTo(
          person.children,
          { y: "-=100" },
          {
            y: "0",
            autoAlpha: 1,
            ease: "Sine.easeOut",
            stagger: 0.5
          }
        )
        .fromTo(
          fb.children,
          { y: "+=50" },
          {
            y: "0",
            autoAlpha: 1,
            ease: "Sine.easeOut",
            stagger: 0.5
          }
        )
        .fromTo(
          twitter.children,
          { x: "-=50" },
          {
            x: "0",
            autoAlpha: 1,
            ease: "Sine.easeOut",
            stagger: 0.5
          }
        )
        .fromTo(
          linkedin.children,
          { y: "+=50" },
          {
            y: "0",
            autoAlpha: 1,
            ease: "Sine.easeOut",
            stagger: 0.5
          }
        )
        .delay(1);
    };
  }, []);

  return (
    <footer className={footerClasses} id="Contact">
      <div className={classes.SocialWrapper} ref={socialWrapper}>
        <Social />
        <SocialList />
      </div>
    </footer>
  );
}

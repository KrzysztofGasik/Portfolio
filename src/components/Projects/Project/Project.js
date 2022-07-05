import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectDetails from "../ProjectDetails/ProjectDetails";
import ProjectImage from "../ProjectImage/ProjectImage";

import classes from "./Project.module.css";
import "./Project.css";

const Project = ({ projectObj, totalNum }) => {
  const descriptionArr = useRef([]);
  const imageArr = useRef([]);

  useEffect(() => {
    let isMobile = navigator.maxTouchPoints > 0;
    const descriptions = Object.values(descriptionArr)[0];
    const images = Object.values(imageArr)[0];
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([...descriptions], { autoAlpha: 0 });
    gsap.set([...images], { autoAlpha: 0 });

    const animateElement = (element, trigger) => {
      if (trigger === undefined) trigger = element;
      const timeLine = gsap.timeline();
      timeLine.fromTo(
        element,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          autoAlpha: 1,
          duration: 1,
          ease: "Power2.easeInOut",
          scrollTrigger: {
            trigger: trigger,
            start: isMobile ? "top bottom" : "",
            end: isMobile ? "bottom center" : "",
            scrub: 1,
          },
        }
      );
    };

    descriptions.forEach((desc, index, arr) => {
      let ind = index < 1 ? document.querySelector("#Skills") : index - 1;
      let isHtmlEl = typeof ind !== "number";
      animateElement(
        desc,
        isHtmlEl ? document.querySelector("#Skills") : arr[ind]
      );
    });

    images.forEach((img, index, arr) => {
      let ind = index < 1 ? document.querySelector("#Skills") : index - 1;
      let isHtmlEl = typeof ind !== "number";
      animateElement(
        img,
        isHtmlEl ? document.querySelector("#Skills") : arr[ind]
      );
    });

  }, []);

  const wrapperClasses =
    projectObj.orientation === "LTR"
      ? classes.Wrapper__LTR
      : classes.Wrapper__RTL;

  return (
    <div className={wrapperClasses}>
      <div
        className={classes.DetailsWrapper}
        ref={(project) => descriptionArr.current.push(project)}
      >
        <ProjectDetails details={projectObj} />
      </div>
      <div
        className={classes.ImageWrapper}
        ref={(project) => imageArr.current.push(project)}
      >
        <ProjectImage details={projectObj} />
      </div>
    </div>
  );
};

export default Project;

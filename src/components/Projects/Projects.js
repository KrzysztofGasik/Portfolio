import { React, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faSass,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import note from "../../images/note.jpg";
import things from "../../images/things.jpg";
import cat from "../../images/cat.jpg";
import pollen from "../../images/pollen.jpg";

export default function Projects() {
  const projects = [
    {
      name: "Let me organize your day",
      url: "https://krzysztofgasik.github.io/LetMeOrganizeYourDay",
      description: "This was my first app which help me organize my day",
      image: note,
      repo: "LetMeOrganizeYourDay",
      stack: [faReact, faJs, faSass],
    },
    {
      name: "Oddam Rzeczy",
      url: "https://krzysztofgasik.github.io/Oddam-Rzeczy",
      description:
        "Check your wardrobe and attic. Do you have any spare clothes and things? If answer is yes, please visit this app and share those things with other people. ",
      image: things,
      repo: "Oddam-Rzeczy",
      stack: [faReact, faJs, faSass],
    },
    {
      name: "Catopedia",
      url: "https://krzysztofgasik.github.io/Catopedia",
      description: "Do you love cats? If yes, this app is for you.",
      image: cat,
      repo: "Catopedia",
      stack: [faReact, faJs, faSass],
    },
    {
      name: "Pollen Alert",
      url: "https://krzysztofgasik.github.io/PollenAlert",
      description:
        "Are you allergic to pollen and have allergy to grass and other allergens? Check out this app and it will tell you on which months your allergy is strongest or weakest.",
      image: pollen,
      repo: "PollenAlert",
      stack: [faReact, faJs, faSass],
    },
  ];

  const stack = [faReact, faJs, faSass];

  const descriptionArr = useRef([]);
  const imageArr = useRef([]);

  useEffect(() => {
    let isMobile = navigator.maxTouchPoints > 0;
    const descriptions = Object.values(descriptionArr)[0];
    const images = Object.values(imageArr)[0];
    gsap.registerPlugin(ScrollTrigger);
    gsap.set([...descriptions], { autoAlpha: 0 });
    gsap.set([...images], { autoAlpha: 0 });

    const rightAnimation = (element, trigger) => {
      if (trigger === undefined) trigger = element;
      const timeLine = gsap.timeline();
      timeLine.fromTo(
        element,
        { clipPath: "polygon(100% 100%, 100% 100%, 0% 100%, 0 100%)" },
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

    const leftAnimation = (element, trigger) => {
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
      let ind = index < 1 ? document.querySelector(".skills") : index - 1;
      let isHtmlEl = typeof ind !== "number";
      leftAnimation(
        desc,
        isHtmlEl ? document.querySelector(".skills") : arr[ind]
      );
    });

    images.forEach((img, index, arr) => {
      let ind = index < 1 ? document.querySelector(".skills") : index - 1;
      let isHtmlEl = typeof ind !== "number";
      rightAnimation(img, isHtmlEl ? document.querySelector(".skills") : arr[ind]);
    });
  }, []);

  return (
    <section className="projects" id="Projects">
      {projects.map((project, index) => {
        return (
          <div
            key={project.name}
            className={`project__container ${
              index === projects.length - 1 ? "last" : ""
            }`}
          >
            <div className="project__wrapper">
              <div
                className="project__detailsWrapper"
                ref={(project) => descriptionArr.current.push(project)}
              >
                <p className="project__title">{project.name}</p>
                <p className="project__link">
                  <a href={project.repo}>
                    View project on
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="project__linkIcon"
                    />
                  </a>
                </p>
                <p className="project__repo">
                  <a href={project.url}>
                    View repository on{" "}
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="project__ghIcon"
                    />
                  </a>
                </p>
                <p className="project__description">{project.description}</p>
              </div>
              <div
                className="project__image"
                ref={(project) => imageArr.current.push(project)}
              >
                <div className="project__imageTechstack">
                  <p>Create with:</p>
                  <div className="project__imageWrapper">
                    {stack.map((tech, index) => {
                      return <FontAwesomeIcon key={index} icon={tech} />;
                    })}
                  </div>
                </div>
                <img src={project.image} alt={project.name} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

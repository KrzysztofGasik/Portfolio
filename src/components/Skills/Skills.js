import { React, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faCss3 } from "@fortawesome/free-brands-svg-icons";
export default function Skills() {
  const skillWrapper = useRef(null);

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
          trigger: '.skills',
          start: "top bottom",
          end: "+=500",
          scrub: 1
        },
      }
    );
  }, []);

  const skillSet = [
    {
      name: "React",
      icon: faReact,
      description: 'Components Life Cycle, Class and Functional Components, Hooks, Redux'
    },
    {
      name: "JS",
      icon: faJs,
      description: 'OOP, Functional Programming, Async/Await, ES6'
    },
    {
      name: "CSS",
      icon: faCss3,
      description: 'HTML5, CSS3, RWD, SASS, BEM, Animations, GSAP'
    }
  ];

  return (
    <section className="skills" id="Skills" ref={skillWrapper}>
      <div className="skills__container">
        <ul>
          {skillSet.map((skill) => {
            const {name, icon, description} = skill;
            return (
              <li key={name}>
                <div className="icon__container">
                  <FontAwesomeIcon icon={icon} className={name} />
                </div>
                <p className="skill__title">{name}</p>
                <p className="skill__description">
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

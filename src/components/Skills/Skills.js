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
          trigger: wrapper,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  const skillSet = [
    {
      name: "React",
      icon: faReact,
    },
    {
      name: "JS",
      icon: faJs,
    },
    {
      name: "CSS",
      icon: faCss3,
    },
  ];

  return (
    <section className="skills" id="Skills" ref={skillWrapper}>
      <div className="skills__container">
        <ul>
          {skillSet.map((skill) => {
            return (
              <li key={skill.name}>
                <div className="icon__container">
                  <FontAwesomeIcon icon={skill.icon} className={skill.name} />
                </div>
                <p className="skill__title">{skill.name}</p>
                <p className="skill__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos soluta natus iure aliquid fuga sunt illo, pariatur
                  quas labore, doloribus minima et omnis aliquam esse doloremque
                  veniam alias maiores. Qui.
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

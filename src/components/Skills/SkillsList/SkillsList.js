import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faCss3 } from "@fortawesome/free-brands-svg-icons";

import classes from "./SkillsList.module.css";

const skillSet = [
  {
    name: "React",
    moduleClass: classes.React,
    icon: faReact,
    description:
      "Components Life Cycle, Class and Functional Components, Hooks, Redux, React Context"
  },
  {
    name: "JS",
    moduleClass: classes.JS,
    icon: faJs,
    description: "OOP, Functional Programming, Async/Await, ES6"
  },
  {
    name: "CSS",
    moduleClass: classes.CSS,
    icon: faCss3,
    description: "HTML5, CSS3, RWD, SASS, BEM, Animations, GSAP"
  }
];

const SkillsList = () => {
  return (
    <ul className={classes.List}>
      {skillSet.map(skill => {
        const { name, moduleClass, icon, description } = skill;
        return (
          <li key={name} className={classes.ListElement}>
            <div className={classes.Icon}>
              <FontAwesomeIcon icon={icon} className={moduleClass} />
            </div>
            <p className={classes.Title}>{name}</p>
            <p className={classes.Description}>{description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsList;

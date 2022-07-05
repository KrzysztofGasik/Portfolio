import { faReact, faJs, faCss3 } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";

import Project from "../Project/Project";
import { ThemeContext } from "../../../store/theme-context";

import classes from "./ProjectsList.module.css";

// import screen from "../../../images/share-with-others.jpg";
import tvpuls from "../../../images/tvpuls.jpg";
import note from "../../../images/note.jpg";
import things from "../../../images/things.jpg";
import cat from "../../../images/cat.jpg";
import pollen from "../../../images/pollen.jpg";

const projects = [
  // {
  //     name: "Share with others",
  //     url: "https://share-with-others.web.app/",
  //     description: "New version of project Oddam Rzeczy",
  //     image: screen,
  //     repo: "share-with-others",
  //     stack: [faReact, faJs, faCss3],
  //     orientation: "RTL",
  //   },
  {
    name: "TV PULS",
    url: "https://tvpuls.pl",
    description:
      "New version of website, custom theme using lazy loading, owl carousel, css grid and flexbox.",
    image: tvpuls,
    repo: "",
    stack: [faJs, faCss3],
    orientation: "LTR",
  },
  {
    name: "Pollen Alert",
    url: "https://krzysztofgasik.github.io/PollenAlert",
    description:
      "Are you allergic to pollen and have allergy to grass and other allergens? Check out this app and it will tell you on which months your allergy is strongest or weakest.",
    image: pollen,
    repo: "PollenAlert",
    stack: [faReact, faJs, faCss3],
    orientation: "RTL",
  },
  {
    name: "Catopedia",
    url: "https://krzysztofgasik.github.io/Catopedia",
    description: "Do you love cats? If yes, this app is for you.",
    image: cat,
    repo: "Catopedia",
    stack: [faReact, faJs, faCss3],
    orientation: "LTR",
  },
  {
    name: "Oddam Rzeczy",
    url: "https://krzysztofgasik.github.io/Oddam-Rzeczy",
    description:
      "Check your wardrobe and attic. Do you have any spare clothes and things? If answer is yes, please visit this app and share those things with other people. ",
    image: things,
    repo: "Oddam-Rzeczy",
    stack: [faReact, faJs, faCss3],
    orientation: "RTL",
  },
  {
    name: "Let me organize your day",
    url: "https://krzysztofgasik.github.io/LetMeOrganizeYourDay",
    description: "This was my first app which help me organize my day",
    image: note,
    repo: "LetMeOrganizeYourDay",
    stack: [faReact, faJs, faCss3],
    orientation: "LTR",
  },
];

const ProjectsList = () => {
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;
  const containerClasses = isDarkTheme
    ? `${classes.ContainerDark} ${classes.Container}`
    : classes.Container;
  return projects.map((project, index) => {
    return (
      <div
        key={project.name}
        className={`${containerClasses} ${
          index === projects.length - 1 ? classes.Last : ""
        }`}
      >
        <Project projectObj={project} />
      </div>
    );
  });
};
export default ProjectsList;

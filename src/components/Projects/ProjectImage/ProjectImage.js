import { Fragment, useContext } from "react";

import { ThemeContext } from "../../../store/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faCss3 } from "@fortawesome/free-brands-svg-icons";

import classes from "./ProjectImage.module.css";
import "./ProjectImage.css";

import { ReactComponent as FirebaseIcon } from "../../../images/firebase-icon.svg";

const stack = [faReact, faJs, faCss3];

const ProjectImage = ({ details }) => {
  const isFirebase = details.name === "Share with others";
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;
  const imageTechStackClasses = isDarkTheme
    ? `${classes.ImageTechstackDark} ${classes.ImageTechstack}`
    : classes.ImageTechstack;
  const titleTechStackClasses = isDarkTheme
    ? `${classes.TitleTechstackDark} ${classes.TitleTechstack} `
    : classes.TitleTechstack;
  return (
    <Fragment>
      <div className={imageTechStackClasses}>
        <p className={titleTechStackClasses}>Created with:</p>
        <div className={classes.ImageStackWrapper}>
          {stack.map((tech, index) => {
            let iconClasses = `${classes.Icon}`;
            let isLast = index === stack.length - 1;

            return isLast && isFirebase ? (
              <Fragment>
                <FontAwesomeIcon
                  key={index}
                  icon={tech}
                  className={iconClasses}
                />
                <FirebaseIcon className={iconClasses}/>
              </Fragment>
            ) : (
              <FontAwesomeIcon
                key={index}
                icon={tech}
                className={iconClasses}
              />
            );
          })}
        </div>
      </div>
      <img src={details.image} alt={details.name} className={classes.Image} />
    </Fragment>
  );
};

export default ProjectImage;

import { Fragment, useContext } from "react";

import { ThemeContext } from "../../../store/theme-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import classes from "./ProjectDetails.module.css";

const ProjectDetails = ({ details }) => {
  const isDarkTheme = useContext(ThemeContext).isDarkTheme;
  const titleClasses = isDarkTheme ? `${classes.TitleDark} ${classes.Title}` : classes.Title;
  const linkClasses = isDarkTheme ? `${classes.LinkDark} ${classes.Link}` : classes.Link;
  const repoClasses =isDarkTheme ? `${classes.RepoDark} ${classes.Repo}` : classes.Repo;
  const repourlClasses = isDarkTheme ? `${classes.RepoUrlDark} ${classes.RepoUrl}` : classes.RepoUrl;
  const descriptionClasses = isDarkTheme ? `${classes.DescriptionDark} ${classes.Description}` : classes.Description;
  return (
    <Fragment>
      <p className={titleClasses}>{details.name}</p>
      <p className={linkClasses}>
        <a href={details.repo} className={repourlClasses}>
          View project on
          <FontAwesomeIcon icon={faGlobe} className={classes.LinkIcon} />
        </a>
      </p>
      <p className={repoClasses}>
        <a href={details.url} className={repourlClasses}>
          View repository on
          <FontAwesomeIcon icon={faGithub} className={classes.GHIcon} />
        </a>
      </p>
      <p className={descriptionClasses}>{details.description}</p>
    </Fragment>
  );
};

export default ProjectDetails;

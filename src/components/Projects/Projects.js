import { useContext } from "react";

import ProjectsList from "./ProjectsList/ProjectsList"
import {ThemeContext} from "../../store/theme-context"

import classes from "./Projects.module.css"

export default function Projects() {
  const isDarkTheme = useContext(ThemeContext).isDarkTheme
  const projectsClasses = isDarkTheme ? `${classes.ProjectsDark} ${classes.Projects}` : classes.Projects
  return (
    <section className={projectsClasses} id="Projects">
      <ProjectsList />
    </section>
  );
}

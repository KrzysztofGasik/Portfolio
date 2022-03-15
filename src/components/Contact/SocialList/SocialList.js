import React from "react";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import classes from "./SocialList.module.css";
import SocialElement from "../SocialElement/SocialElement";

const socialListArray = [
  { href: "https://github.com/KrzGas", icon: faGithub, class: classes.GHIcon },
  { href: "https://www.linkedin.com/in/krzysztof-gasik", icon: faLinkedin, class: classes.LinkedinIcon },
  { href: "mailto:kgasik@gmail.com", icon: faEnvelope, class: classes.MailIcon }
];

const SocialList = () => {
  return (
    <div className={classes.SocialListWrapper}>
      <ul className={classes.SocialList}>
        {socialListArray.map(el => (
          <SocialElement key={el.href} href={el.href} icon={el.icon} iconClass={el.class}/>
        ))}
      </ul>
    </div>
  );
};

export default SocialList;

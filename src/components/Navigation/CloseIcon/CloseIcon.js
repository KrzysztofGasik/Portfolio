import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import classes from "./CloseIcon.module.css";

export default function CloseIcon({ onClick, hidden }) {
  let wrapperClasses = !hidden ? classes.WrapperHidden : classes.Wrapper;
  return (
    <div className={wrapperClasses} onClick={onClick}>
      <FontAwesomeIcon className={classes.Icon} icon={faTimesCircle} />
    </div>
  );
}

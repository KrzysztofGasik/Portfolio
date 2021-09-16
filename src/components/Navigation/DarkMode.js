import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function DarkMode() {
  const [toggle, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!toggle);
    document.body.classList.toggle('theme__light');
    document.body.classList.toggle('theme__dark');
  };

  return (
    <div className="darkmode__wrapper">
      <div
        onClick={toggleDarkMode}
        className={
          toggle
            ? "darkmode__button darkmode__button--active"
            : "darkmode__button"
        }
      >
        <div className="darkmode__buttonDot">
          <FontAwesomeIcon icon={toggle ? faSun : faMoon} />
        </div>
      </div>
    </div>
  );
}

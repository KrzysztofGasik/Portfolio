import { useState } from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Hamburger from './Hamburger';

function Navigation() {
  const navigationElements = [
    'Home',
    'Project',
    'Skills',
    'Projects',
    'Contact',
  ];
  const [toggle, setSwitch] = useState(false);

  const switchHamburger = () => {
    setSwitch(!toggle);
  };

  return (
    <div className='navigation__container'>
      <header>
        <a href='https://www.linkedin.com/in/krzysztof-gasik'>Krzysztof Gasik</a>
        <Hamburger onClick={switchHamburger} />
        <nav>
          <ul
            className={toggle ? 'open navigation__links' : 'navigation__links'}
          >
            {navigationElements.map((element) => {
              return (
                <li key={element} className={toggle ? 'fade' : ''}>
                  <Link
                    to={element}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {element}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <div className='navigation__social__icons'>
        <ul>
          <li>
            <a href='https://github.com/KrzGas'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/krzysztof-gasik'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href='mailto:kgasik@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;

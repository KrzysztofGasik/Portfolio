import { React, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faSass } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import note from "../../images/note.jpg";
import things from "../../images/things.jpg";
import cat from "../../images/cat.jpg";
import pollen from "../../images/pollen.jpg";

export default function Projects() {
  const projectDesc1 = useRef(null);
  const projectDesc2 = useRef(null);
  const projectDesc3 = useRef(null);
  const projectDesc4 = useRef(null);
  const projectImg1 = useRef(null);
  const projectImg2 = useRef(null);
  const projectImg3 = useRef(null);
  const projectImg4 = useRef(null);

  // const projects = [
  //   {
  //     name: 'Let me organize your day',
  //     url: 'https://krzgas.github.io/LetMeOrganizeYourDay',
  //     description: 'This was my first app which help me organize my day',
  //     image: note,
  //     repo: 'LetMeOrganizeYourDay',
  //     stack: [faReact, faJs, faSass]
  //   },
  //   {
  //     name: 'Oddam Rzeczy',
  //     url: 'https://krzgas.github.io/Oddam-Rzeczy',
  //     description: 'Check your wardrobe and attic. Do you have any spare clothes and things? If answer is yes, please visit this app and share those things with other people. ',
  //     image: things,
  //     repo: 'Oddam-Rzeczy',
  //     stack: [faReact, faJs, faSass]
  //   },
  //   {
  //     name: 'Catopedia',
  //     url: 'https://krzgas.github.io/Catopedia',
  //     description: 'Do you love cats? If yes, this app is for you.',
  //     image: cat,
  //     repo: 'Catopedia',
  //     stack: [faReact, faJs, faSass]
  //   },
  //   {
  //     name: 'Pollen Alert',
  //     url: 'https://krzgas.github.io/PollenAlert',
  //     description: 'Are you allergic to pollen and have allergy to grass and other allergens? Check out this app and it will tell you on which months your allergy is strongest or weakest.',
  //     image: pollen,
  //     repo: 'PollenAlert',
  //     stack: [faReact, faJs, faSass]
  //   }
  // ];

  const stack = [faReact, faJs, faSass];

  useEffect(() => {
    let isMobile = navigator.maxTouchPoints > 0;

    const portfolioProjDesc1 = projectDesc1.current;
    const portfolioProjDesc2 = projectDesc2.current;
    const portfolioProjDesc3 = projectDesc3.current;
    const portfolioProjDesc4 = projectDesc4.current;
    const portfolioProjImg1 = projectImg1.current;
    const portfolioProjImg2 = projectImg2.current;
    const portfolioProjImg3 = projectImg3.current;
    const portfolioProjImg4 = projectImg4.current;

    gsap.registerPlugin(ScrollTrigger);
    gsap.set(
      [
        portfolioProjDesc1,
        portfolioProjDesc2,
        portfolioProjDesc3,
        portfolioProjDesc4,
      ],
      { autoAlpha: 0 }
    );
    gsap.set(
      [
        portfolioProjImg1,
        portfolioProjImg2,
        portfolioProjImg3,
        portfolioProjImg4,
      ],
      { autoAlpha: 0 }
    );

    const rightAnimation = (element, trigger) => {
      if (trigger === undefined) trigger = element;
      const timeLine = gsap.timeline();
      timeLine.fromTo(
        element,
        { clipPath: "polygon(100% 100%, 100% 100%, 0% 100%, 0 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          autoAlpha: 1,
          duration: 1,
          ease: "Power2.easeInOut",
          scrollTrigger: {
            trigger: trigger,
            start: isMobile ? "top bottom" : "",
            end: isMobile ? "bottom center" : "",
            scrub: 1,
          },
        }
      );
    };

    const leftAnimation = (element, trigger) => {
      if (trigger === undefined) trigger = element;
      const timeLine = gsap.timeline();
      timeLine.fromTo(
        element,
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          autoAlpha: 1,
          duration: 1,
          ease: "Power2.easeInOut",
          scrollTrigger: {
            trigger: trigger,
            start: isMobile ? "top bottom" : "",
            end: isMobile ? "bottom center" : "",
            scrub: 1,
          },
        }
      );
    };

    leftAnimation(portfolioProjDesc1, document.querySelector(".skills"));
    leftAnimation(portfolioProjDesc2, portfolioProjDesc1);
    leftAnimation(portfolioProjDesc3, portfolioProjDesc2);
    leftAnimation(portfolioProjDesc4, portfolioProjDesc3);
    rightAnimation(portfolioProjImg1, document.querySelector(".skills"));
    rightAnimation(portfolioProjImg2, portfolioProjImg1);
    rightAnimation(portfolioProjImg3, portfolioProjImg2);
    rightAnimation(portfolioProjImg4, portfolioProjImg3);
  }, []);

  return (
    <section className="projects" id="Projects">
      <div className="project__container">
        <div className="project__wrapper">
          <div className="project__detailsWrapper" ref={projectDesc1}>
            <p className="project__title">Let me organize your day</p>
            <p className="project__link">
              <a href="https://krzgas.github.io/LetMeOrganizeYourDay">
                Let me organize your day
                <FontAwesomeIcon icon={faLink} className="project__linkIcon" />
              </a>
            </p>
            <p className="project__description">
              This was my first app which help me organize my day
            </p>
          </div>
          <div className="project__image" ref={projectImg1}>
            <div className="project__imageTechstack">
              <p>Create with:</p>
              <div className="project__imageWrapper">
                {stack.map((tech, index) => {
                  return <FontAwesomeIcon key={index} icon={tech} />;
                })}
              </div>
            </div>
            <img src={note} alt="" />
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="project__wrapper">
          <div className="project__detailsWrapper" ref={projectDesc2}>
            <p className="project__title">Oddam Rzeczy</p>
            <p className="project__link">
              <a href="https://krzgas.github.io/Oddam-Rzeczy">
                Oddam Rzeczy{" "}
                <FontAwesomeIcon icon={faLink} className="project__linkIcon" />
              </a>
            </p>
            <p className="project__description">
              Check your wardrobe and attic. Do you have any spare clothes and
              things? If answer is yes, please visit this app and share those
              things with other people.
            </p>
          </div>
          <div className="project__image" ref={projectImg2}>
            <div className="project__imageTechstack">
              <p>Create with:</p>
              <div className="project__imageWrapper">
                {stack.map((tech, index) => {
                  return <FontAwesomeIcon key={index} icon={tech} />;
                })}
              </div>
            </div>
            <img src={things} alt="" />
          </div>
        </div>
      </div>
      <div className="project__container">
        <div className="project__wrapper">
          <div className="project__detailsWrapper" ref={projectDesc3}>
            <p className="project__title">Catopedia</p>
            <p className="project__link">
              <a href="https://krzgas.github.io/Catopedia">
                Catopedia{" "}
                <FontAwesomeIcon icon={faLink} className="project__linkIcon" />
              </a>
            </p>
            <p className="project__description">
              Do you love cats? If yes, this app is for you.
            </p>
          </div>
          <div className="project__image" ref={projectImg3}>
            <div className="project__imageTechstack">
              <p>Create with:</p>
              <div className="project__imageWrapper">
                {stack.map((tech, index) => {
                  return <FontAwesomeIcon key={index} icon={tech} />;
                })}
              </div>
            </div>
            <img src={cat} alt="" />
          </div>
        </div>
      </div>
      <div className="project__container last">
        <div className="project__wrapper">
          <div className="project__detailsWrapper" ref={projectDesc4}>
            <p className="project__title">Pollen Alert</p>
            <p className="project__link">
              <a href="https://krzgas.github.io/PollenAlert">
                Pollen Alert{" "}
                <FontAwesomeIcon icon={faLink} className="project__linkIcon" />
              </a>
            </p>
            <p className="project__description">
              Are you allergic to pollen and have allergy to grass and other
              allergens? Check out this app and it will tell you on which months
              your allergy is strongest or weakest.
            </p>
          </div>
          <div className="project__image" ref={projectImg4}>
            <div className="project__imageTechstack">
              <p>Create with:</p>
              <div className="project__imageWrapper">
                {stack.map((tech, index) => {
                  return <FontAwesomeIcon key={index} icon={tech} />;
                })}
              </div>
            </div>
            <img src={pollen} alt="" />
          </div>
        </div>
      </div>

      {/* {projects.map(project => {
        return (
          <div key={project.name} className='project__container'>
            <div className='project__wrapper'>
              <div className='project__detailsWrapper'>
                <p className='project__title'>{project.name}</p>
                <p className='project__link'><a href={project.url}>{project.name}</a></p>
                <p className='project__description'>
                  {project.description}
                </p>
              </div>
              <div className='project__image' >
                <div className='project__imageTechstack'>
                  <p>Create with:</p>
                  <div className="project__imageWrapper">
                    {project.stack.map((tech, index) => {
                      return (
                        <FontAwesomeIcon key={index} icon={tech} />
                      )
                    })}
                  </div>
                </div>
                <img src={project.image} alt='' />
              </div>
            </div>
          </div>
        )
      })} */}
    </section>
  );
}

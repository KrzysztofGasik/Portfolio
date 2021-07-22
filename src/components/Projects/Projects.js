import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faSass } from '@fortawesome/free-brands-svg-icons'
import note from '../../images/note.jpg';
import things from '../../images/things.jpg';
import cat from '../../images/cat.jpg';
import pollen from '../../images/pollen.jpg';

export default function Projects() {

  const projects = [
    {
      name: 'Let me organize your day',
      url: 'https://krzgas.github.io/LetMeOrganizeYourDay',
      description: 'This was my first app which help me organize my day',
      image: note,
      repo: 'LetMeOrganizeYourDay',
      stack: [faReact,faJs,faSass]
    },
    {
      name: 'Oddam Rzeczy',
      url: 'https://krzgas.github.io/Oddam-Rzeczy',
      description: 'Check your wardrobe and attic. Do you have any spare clothes and things? If answer is yes, please visit this app and share those things with other people. ',
      image: things,
      repo: 'Oddam-Rzeczy',
      stack: [faReact,faJs,faSass]
    },
    {
      name: 'Catopedia',
      url: 'https://krzgas.github.io/Catopedia',
      description: 'Do you love cats? If yes, this app is for you.',
      image: cat,
      repo: 'Catopedia',
      stack: [faReact,faJs,faSass]
    },
    {
      name: 'Pollen Alert',
      url: 'https://krzgas.github.io/PollenAlert',
      description: 'Are you allergic to pollen and have allergy to grass and other allergens? Check out this app and it will tell you on which months your allergy is strongest or weakest.',
      image: pollen,
      repo: 'PollenAlert',
      stack: [faReact,faJs,faSass]
    }
  ];


  return (
    <section className='portfolio' id='Projects'>

      {projects.map(project => {
        return (
          <div key={project.name} className='portfolio__container transition3'>
            <div className='portfolio__left'>
              <div className='inner__container'>
                <p className='project__title'>{project.name}</p>
                <p className='project__link'><a href={project.url}>{project.name}</a></p>
                <p className='project__description'>
                  {project.description}
                </p>
              </div>
              <div className='portolio__image'>
                <div className='portfolio__image__techstack'>
                {project.stack.map((tech,index)=>{
                  return(
                    <FontAwesomeIcon key={index}icon={tech}/>
                  )
                })}
                </div>
                <img src={project.image} alt='' />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  );
}

import React from 'react';
import image from '../../images/projekt.png';
export default function Projects() {
  // const Projects

  return (
    <section className='portfolio' id='Projects'>
      <div className='portfolio__container transition3'>
        <div className='portfolio__left'>
          <div className='inner__container'>
            <p className='project__title'>Tytuł</p>
            <p className='project__link'>Adres</p>
            <p className='project__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              id consectetur illum enim corporis, explicabo commodi iste
              voluptas obcaecati qui quidem, perferendis sequi iure animi ad
              culpa deserunt at doloremque.
            </p>
          </div>
          <div className='portolio__image'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
      <div className='portfolio__container transition3'>
        <div className='portfolio__left'>
          <div className='inner__container'>
            <p className='project__title'>Tytuł</p>
            <p className='project__link'>Adres</p>
            <p className='project__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              id consectetur illum enim corporis, explicabo commodi iste
              voluptas obcaecati qui quidem, perferendis sequi iure animi ad
              culpa deserunt at doloremque.
            </p>
          </div>
          <div className='portolio__image'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
      <div className='portfolio__container transition3'>
        <div className='portfolio__left'>
          <div className='inner__container'>
            <p className='project__title'>Tytuł</p>
            <p className='project__link'>Adres</p>
            <p className='project__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              id consectetur illum enim corporis, explicabo commodi iste
              voluptas obcaecati qui quidem, perferendis sequi iure animi ad
              culpa deserunt at doloremque.
            </p>
          </div>
          <div className='portolio__image'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}

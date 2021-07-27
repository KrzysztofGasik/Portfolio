import { React, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectImg from '../../images/tvpuls.jpg';

export default function FeaturedProject() {
  const leftCol = useRef(null);
  const rightCol = useRef(null);

  useEffect(() => {
    const leftColElements = leftCol.current;
    const rightColElements = rightCol.current;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(leftColElements, { autoAlpha: 0 });
    gsap.set(rightColElements, { autoAlpha: 0 });

    const timeLine = gsap.timeline();
    timeLine.fromTo(
      leftColElements,
      { x: '-=10' },
      {
        x: '0',
        autoAlpha: 1,
        duration: 1,
        ease: 'Power2.easeInOut',
        scrollTrigger: {
          trigger: leftColElements,
          start: 'center center',
          end: 'bottom center',
          scrub: true,
        },
      }
    ).fromTo(rightColElements,
      { x: '+=10' },
      {
        x: '0',
        autoAlpha: 1,
        duration: 1,
        ease: 'Power2.easeInOut',
        scrollTrigger: {
          trigger: rightColElements,
          start: 'center center',
          end: 'bottom center',
          scrub: true
        },
      })
  }, []);

  return (
    <section className='featured__project' id='Project'>
      <div className='column__left' ref={leftCol}>
        <div className='inner__container'>
          <p className='project__title'>Featured Project</p>
          <a href='https://tvpuls.pl' className='project__link'>
            tvpuls.pl
          </a>
          <p className='project__description'>
            New version of website, custom theme using lazy loading, owl
            carousel, css grid and flexbox.
          </p>
        </div>
      </div>
      <img src={projectImg} alt='' className='column__right' ref={rightCol} />
    </section>
  );
}

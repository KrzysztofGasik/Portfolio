import React from 'react'
import projectImg from '../../images/tvpuls.jpg'
export default function FeaturedProject() {
    return (
        <section className='featured__project' id='Project'>
            <div className='column__left'>
                <div className='inner__container'>
                    <p className='project__title'>Featured Project</p>
                    <a href='https://tvpuls.pl' className='project__link'>tvpuls.pl</a>
                    <p className='project__description'>New version of website, custom theme using lazy loading, owl carousel, css grid and flexbox.</p>
                </div>
            </div>
            <img src={projectImg} alt='' className='column__right'/>
        </section>
    )
}

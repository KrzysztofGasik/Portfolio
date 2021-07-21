import React from 'react'
import projectImg from '../../images/projekt.png'
export default function FeaturedProject() {
    return (
        <section className='featured__project' id='Project'>
            <div className='column__left'>
                <div className='inner__container transition'>
                    <p className='project__title'>Featured Project</p>
                    <a href='https://tvpuls.pl' className='project__link'>tvpuls.pl</a>
                    <p className="project__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi aspernatur repellat, voluptas officiis nam exercitationem! Dolorem, quis cumque repudiandae officiis dolores unde praesentium, recusandae maxime nemo itaque, laborum deserunt.</p>
                </div>
            </div>
            <img src={projectImg} alt="" className='column__right transition'/>
        </section>
    )
}

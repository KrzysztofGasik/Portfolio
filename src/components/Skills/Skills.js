import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faCss3 } from '@fortawesome/free-brands-svg-icons'
export default function Skills() {

    const skillSet = [
        {
            name: 'React',
            icon: faReact
        },
        {
            name: 'JS',
            icon: faJs
        },
        {
            name: 'CSS',
            icon: faCss3
        }
    ];

    return (
        <section className='skills' id='Skills'>
            <div className='skills__container'>
                <ul>
                    {skillSet.map(skill => {
                        return (
                            <li className='transition' key={skill.name} >
                                <div className='icon__container'>
                                    <FontAwesomeIcon icon={skill.icon} className={skill.name} /></div>
                                <p className='skill__title'>{skill.name}</p>
                                <p className='skill__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos soluta natus iure aliquid fuga sunt illo, pariatur quas labore, doloribus minima et omnis aliquam esse doloremque veniam alias maiores. Qui.</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

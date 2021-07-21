import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import welcomeGraphic from '../../images/react_js.png'

export default function Welcome() {
    return (
        <div className='welcome__wrapper' id='Home'>
            <div className="column__left">
                <h1>I'm bringing your designs to reality</h1>
                <div className='get__in__touch'>
                    <FontAwesomeIcon icon={faHandshake} />
                    <p>Poznajmy się</p>
                </div>
                <FontAwesomeIcon className='scroll' icon={faArrowDown} />
            </div>
            <div className="column__right">
                <img src={welcomeGraphic} alt='welcome graphic' className='welcome__image' />
            </div>
        </div>
    )
}

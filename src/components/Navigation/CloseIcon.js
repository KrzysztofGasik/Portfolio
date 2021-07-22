import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

export default function CloseIcon({onClick}) {

    return (
        <div className='close__icon' onClick={onClick}>
            <FontAwesomeIcon icon={faTimesCircle} />
        </div>
    )
}

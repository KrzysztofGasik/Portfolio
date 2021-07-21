import React from 'react'

export default function Hamburger({onClick}) {

    return (
        <div className='hamburger__icon' onClick={onClick}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
    )
}

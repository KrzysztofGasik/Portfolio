import React from 'react'
import image from '../../images/projekt.png'
export default function Projects() {
    return (
        <section className='portfolio' id='Projects'>
            <div className="portfolio-container transition3">
                <div className="portfolio__left">
                    <div className="inner">
                        <p className='title'>Tytuł</p>
                        <p className='title__href'>Adres</p>
                        <p className='title__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id consectetur illum enim corporis, explicabo commodi iste voluptas obcaecati qui quidem, perferendis sequi iure animi ad culpa deserunt at doloremque.</p>
                    </div>
                    <img src={image} alt=""/>
                </div>
            </div>
            <div className="portfolio-container transition3">
                <div className="portfolio__left">
                    <div className="inner">
                        <p className='title'>Tytuł</p>
                        <p className='title__href'>Adres</p>
                        <p className='title__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id consectetur illum enim corporis, explicabo commodi iste voluptas obcaecati qui quidem, perferendis sequi iure animi ad culpa deserunt at doloremque.</p>
                    </div>
                    <img src={image} alt=""/>
                </div>
            </div>
            <div className="portfolio-container transition3">
                <div className="portfolio__left">
                    <div className="inner">
                        <p className='title'>Tytuł</p>
                        <p className='title__href'>Adres</p>
                        <p className='title__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id consectetur illum enim corporis, explicabo commodi iste voluptas obcaecati qui quidem, perferendis sequi iure animi ad culpa deserunt at doloremque.</p>
                    </div>
                    <img src={image} alt=""/>
                </div>
            </div>
        </section>
    )
}

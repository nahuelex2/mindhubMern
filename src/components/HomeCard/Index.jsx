import React from 'react'
import style from './style.css'

export default function HomeCard() {
    return (
        <div className='card'>
            <div className='card__content'>
                <h2 className='card__title'>Find the perfect destination</h2>
                <p className='card__text'>
                    Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
                </p>

                <button className='card__btn'>View More</button>
            </div>
            <img className='card__img' src="../public/imagen.png" alt="" />

        </div>
    )
}

import React from 'react'
import './style.css'
export default function Slide({ image }) {
    return (

        <div className="slide-card ">

            <img className='slide-card__img ' src={image.image} alt={image.name} />
            <h3 className='slide-card__title'>{image.name}</h3>
        </div>

    )
}

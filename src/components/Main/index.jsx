import React from 'react'
import HomeCard from '../HomeCard'
import './style.css'
import Carousel from '../Carousel'


export default function Main() {
    return (
        <main className='container'>
            <HomeCard />
            <Carousel />
        </main>
    )
}

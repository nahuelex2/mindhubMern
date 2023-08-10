import React, { useState } from 'react'
import { Link as Anchor, Link } from "react-router-dom"
import NavLink from './NavLink'
import style from './style.css'
export default function Nav() {
    let data = [
        { href: 'home.html', text: 'Home' },
        { href: 'cities.html', text: 'Cities' },
        // { href: 'logIn.html', text: 'Login' },

    ]







    return (
        <nav className="nav">
            <ul className='nav__links'>
                {/* {data.map((link, key) => <Link to={} key={key} href={link.href} text={link.text} />)} */}
                <li><Anchor className='nav__link' to={'/'}>Home</Anchor></li>
                <li><Anchor className='nav__link' v to={'/cities'}>Cities</Anchor></li>
                <button className='nav__button'>login</button>

            </ul>


        </nav>
    )
}

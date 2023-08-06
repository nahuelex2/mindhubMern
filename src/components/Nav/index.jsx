import React from 'react'
import na from './NavLink'
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
                {data.map((link, key) => <NavLink key={key} href={link.href} text={link.text} />)}
                <button className='nav__button'>Login</button>
            </ul>


        </nav>
    )
}

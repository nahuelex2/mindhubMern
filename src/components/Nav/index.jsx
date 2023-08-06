import React, { useState } from 'react'
import na from './NavLink'
import NavLink from './NavLink'
import style from './style.css'
export default function Nav() {
    let data = [
        { href: 'home.html', text: 'Home' },
        { href: 'cities.html', text: 'Cities' },
        // { href: 'logIn.html', text: 'Login' },

    ]
    let [title, setTitle] = useState('title')


    const handlerTitle = () => {
        setTitle('title changed')
    }



    return (
        <nav className="nav">
            <ul className='nav__links'>
                {data.map((link, key) => <NavLink key={key} href={link.href} text={link.text} />)}
                <li><a href="">{title}</a></li>
                <button className='nav__button'></button>
                <button onClick={handlerTitle}>cambiar title</button>
            </ul>


        </nav>
    )
}

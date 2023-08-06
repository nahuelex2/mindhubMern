import React from 'react'
import style from './style.css'
export default function NavLink({ href, text }) {
    return (
        <li><a className='nav__link' href={href}>{text}</a></li>
    )
}

import React from 'react'
import './style.css'
export default function Footer() {
    return (
        <footer className='footer'>
            <section className='footer__section'>
                <h2>Mytinery</h2>
            </section>
            <section className='footer__section'>
                <h2>contact</h2>
                <div className="footer__links">
                    <a className='footer__link' href="">facebook</a>
                    <a className='footer__link' href="">instagram</a>
                    <a className='footer__link' href="">X</a>
                    <a className='footer__link' href="">whatsapp</a>
                </div>
            </section>
        </footer>
    )
}

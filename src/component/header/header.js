import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <header>
            <NavLink className='link' to='/'><p className='brand'>Nihon</p></NavLink>
            <nav>
                <NavLink className="link pad" to="/"><p>Home</p></NavLink>
                <NavLink className="link pad" to="/custom"><p>Custom</p></NavLink>
                <NavLink className="link pad" to="/cart"><p>Pricing</p></NavLink>
                <NavLink className="link pad" to="/status"><p>Status</p></NavLink>
            </nav>
        </header>
    )
}

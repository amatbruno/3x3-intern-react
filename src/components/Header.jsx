import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/"><img src="/src/assets/logo.png" alt="logo" /></Link>
                <Link to="/events" >EVENT</Link>
                <Link to="/tickets">TICKETS</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/login"><img id='login-img' src="file:///C:/Users/brunoamagar/Documents/GitHub/3x3_intern/src/assets/login.png" alt="user-log" /></Link>
            </nav>
            <Outlet />
        </header>
    )
}

export default Header
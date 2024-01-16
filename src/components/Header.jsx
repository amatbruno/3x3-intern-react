import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/"><img id='logo-img' src='https://static.vecteezy.com/system/resources/previews/023/580/002/original/illustration-of-modern-basketball-logo-it-s-for-champion-concept-png.png' alt="log" /></Link>
                <Link to="/events" >EVENT</Link>
                <Link to="/tickets">TICKETS</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/login"><svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-user"
                    width="35" height="35" viewBox="0 0 24 24"
                    stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg></Link>
            </nav>
            <Outlet />
        </header>
    )
}

export default Header
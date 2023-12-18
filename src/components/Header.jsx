import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Header() {
    function click() {
        alert("hello")
    }

    return (
        <header>
            <nav>
                <Link to="/"><img src="/src/assets/logo.png" alt="logo" /></Link>
                <Link to="/events" >EVENT</Link>
                <Link to="/tickets">TICKETS</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/contact">CONTACT</Link>
                {/* <input type="checkbox" name="toggle" className="mobileToggle" id="toggle" />
                <label htmlFor="toggle"></label> */}
                <Link to="/login"><img id='login-img' src="/src/assets/login.png" alt="user-log" /></Link>
            </nav>
            <Outlet />
        </header>
    )
}

export default Header
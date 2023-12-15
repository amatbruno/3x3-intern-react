import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    function click() {
        alert("hello")
    }

    return (
        <header>
            <nav>
                <Link to="/" onClick={click}><img src="/src/assets/logo.png" alt="logo" /></Link>
                <Link to="/events" >EVENTS</Link>
                <Link to="/tickets">TICKETS</Link>
                <Link to="/gallery">GALLERY</Link>
                <Link to="/contact">CONTACT</Link>
                {/* <input type="checkbox" name="toggle" className="mobileToggle" id="toggle" />
                <label htmlFor="toggle"></label> */}
                <Link to="/login"><img id='login-img' src="/src/assets/login.png" alt="user-log" /></Link>
            </nav>
        </header>
    )
}

export default Header
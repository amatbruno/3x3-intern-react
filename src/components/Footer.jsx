import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {



    return (
        <footer>
            <nav>
                <Link className='foot-el' to="https://www.linkedin.com/in/mebruno/">Linkedin</Link>
                <Link className='foot-el' to="https://github.com/amatbruno">Github</Link>
                <Link className='foot-el' to="amattbruno@gmail.com">Email</Link>
            </nav>
            <div className="author">
                <p>Made by Bruno Amat</p>
            </div>
        </footer>
    )
}

export default Footer
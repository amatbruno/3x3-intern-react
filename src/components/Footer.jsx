import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {



    return (
        <footer>
            <nav>
                <Link to="https://adventjs.dev/es#retos">Linkedin</Link>
                <Link to="https://adventjs.dev/es#retos">Github</Link>
                <Link to="https://adventjs.dev/es#retos">Suggestion</Link>
            </nav>
            <div className="author">
                <p>Made by Bruno Amat</p>
            </div>
        </footer>
    )
}

export default Footer
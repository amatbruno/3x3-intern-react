import React from 'react'
import "./Card.css"

function Card() {
    return (
        <div className='Card'>
            <img width="100" height="100" src="/src/assets/tickets.png" alt="two-tickets"/>
            <div className="elements">
                <h2>Title</h2>
                <p>text</p>
            </div>
        </div>
    )
}

export default Card
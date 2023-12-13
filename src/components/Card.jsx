import React from 'react'
import "./Card.css"

function Card(props) {
    return (
            <div className='Card'>
                <img src="/src/assets/tickets.png" alt="two-tickets" />
                <div className="elements">
                    <h2 id='tit'>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
    )
}

export default Card
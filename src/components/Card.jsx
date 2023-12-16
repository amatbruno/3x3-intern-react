import React from 'react'
import "./Card.css"

function Card(props) {

    return (
            <div className='Card'>
                <img src="/src/assets/tickets.png" alt="two-tickets" /> {/*ADD PROPS HERE FOR IMG*/}
                <div className="elements">
                    <h2 id='tit'>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <button>Know More</button>
            </div>
    )
}

export default Card
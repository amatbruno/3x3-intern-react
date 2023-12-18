import React from 'react'
import "./Card.css"

function Card(props) {

    return (
        <div className="Card">
            <img src={props.img} alt="icon-page" /> {/*ADD PROPS HERE FOR IMG*/}
            <div className="elements">
                <h2 id='tit'>{props.title}</h2>
                <p>{props.text}</p>
            </div>
            <button>Know More</button>
        </div>
    )
}

export default Card
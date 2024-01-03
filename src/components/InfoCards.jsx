import React from 'react'
import './InfoCards.css'

function InfoCards(props) {
    return (
        <div className="InfoCards">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <img src={props.img} alt="img_text" />
        </div>
    )
}

export default InfoCards
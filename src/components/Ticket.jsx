import React from 'react'
import './Ticket.css'

function Ticket(props) {
    return (
        <div className="Ticket">
            <div className="hour-date">
                <h2>{props.date}</h2>
                <h3>{props.time}</h3>
            </div>
            <div className="miscellaneous">
                <img src={props.deffered} alt='deffered_icon' id='deffered-img' />
                <p>{props.category} </p>
            </div>
            <div className="versus">
                <span>{props.team1}</span>
                <img src="https://img.icons8.com/ios-filled/50/000000/battle.png" width="20px" alt="vs_img" />
                <span>{props.team2}</span>
            </div>
            <button className='btn-buy2'>BUY TICKET</button>
        </div>
    )
}

export default Ticket
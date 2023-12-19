import React from 'react'
import './Ticket.css'

function Ticket() {
    return (
        <div className="Ticket">
            <div className="hour-date">
                <h2>Fecha</h2>
                <h3>Hora</h3>
            </div>
            <p>Category</p>
            <div className="versus">
                <span>Equipo 1</span>
                <img src="https://img.icons8.com/ios-filled/50/000000/battle.png" width="20px" alt="vs_img" />
                <span>Equipo 2</span>
            </div>
            <button className='btn-buy'>BUY TICKET</button>
        </div>
    )
}

export default Ticket
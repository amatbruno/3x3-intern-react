import React from 'react'
import Header from '../components/Header'
import './TicketsView.css'

function TicketsView() {
    return (
        <div className="App">
            <Header />
            <div className="head-elem">
                <img id='tick-img' src="https://cdn.pixabay.com/photo/2013/02/15/02/16/basketball-81775_1280.jpg" alt="header_img"/>
                <h1>BUY YOUR TICKETS WITH A 50% OFF DISCOUNT</h1>
                <p>This Christmas </p>
                <button className='btn-buy' >BUY NOW</button>
            </div>
            <div className="tickets-sect">
                <h3>Incoming matchs in January</h3>
            </div>
        </div>
    )
}

export default TicketsView
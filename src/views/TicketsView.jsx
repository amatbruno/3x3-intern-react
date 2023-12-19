import React from 'react'
import Header from '../components/Header'
import './TicketsView.css'
import Ticket from '../components/Ticket'

function TicketsView() {
    return (
        <div className="App">
            <Header />
            <div className="head-elem">
                <img id='tick-img' src="https://cdn.pixabay.com/photo/2013/02/15/02/16/basketball-81775_1280.jpg" alt="header_img" />
                <h1>BUY YOUR TICKETS WITH A 50% OFF DISCOUNT</h1>
                <p>This Christmas </p>
                <button className='btn-buy'>BUY NOW</button>
            </div>
            <div className="tickets-sect">
                <div className="tickets-elements">
                    <h3>INCOMING MATCHES ON JANUARY!</h3>
                    <p>The best matches offered by 3x3_Intern, choose your preferred one!</p>
                </div>
                <div className="tickets-comp">
                    < Ticket />
                    < Ticket />
                    < Ticket />
                    < Ticket />
                    < Ticket />
                </div>
            </div>
        </div>
    )
}

export default TicketsView
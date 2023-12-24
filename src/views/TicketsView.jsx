import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './TicketsView.css'
import Ticket from '../components/Ticket'
import tickets from '../data/tickets'
import Swal from 'sweetalert2'
import { useNavigate  } from 'react-router-dom'

function TicketsView() {
    const ticketsList = tickets.map((v, index) => {
        return <Ticket key={index} date={v.date} time={v.time} category={v.category} deffered={v.deffered} team1={v.team1} team2={v.team2} />
    });

    const navigate = useNavigate();

    function paymentSucces() {
        Swal.fire({
            title: 'Payment Succesfull!',
            text: 'Do you want to return to the homepage or keep navigating? ',
            icon: 'success', 
            confirmButtonText: 'Go to homepage',
            cancelButtonText: 'Keep navigating',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/')
            }
        });
    }

    return (
        <div className="App">
            <Header />
            <div className="head-elem">
                <img id='tick-img' src="https://cdn.pixabay.com/photo/2013/02/15/02/16/basketball-81775_1280.jpg" alt="header_img" />
                <a href='#tickt-sect' className='btn-buy'>BUY NOW</a>
            </div>
            <div className="tickets-sect" id='tickt-sect'>
                <div className="tickets-elements">
                    <h3>INCOMING MATCHES ON JANUARY!</h3>
                    <p>The best matches offered by 3x3_Intern, choose your preferred one!</p>
                </div>
                <div className="tickets-comp">
                    {ticketsList}

                    <div className="zone-selection">
                        <h2>Select your sit to continue with the ticket payment:</h2>

                        <div className="map-container">
                            <img src="/src/assets/field-img.png" useMap="#image-map" />
                            <button className="btn-pay" onClick={paymentSucces}>SAVE & PAY</button>
                        </div>

                        <map name="image-map">
                            <area target="" alt="general1" title="General 1 Zone" href="" coords="140,73,417,133" shape="rect" className="highlighted" />
                            <area target="" alt="general2" title="General 2 Zone" href="" coords="140,326,418,385" shape="rect" />
                            <area target="" alt="box1" title="Box 1 Zone" href="" coords="79,73,133,73,136,132,104,137,91,105" shape="poly" className="highlighted" />
                            <area target="" alt="box2" title="Box 2 Zone" href="" coords="103,324,135,324,135,384,75,382" shape="poly" className="highlighted" />
                            <area target="" alt="box3" title="Box 3 Zone" href="" coords="423,72,482,75,453,134,425,134" shape="poly" className="highlighted" />
                            <area target="" alt="box4" title="Box 4 Zone" href="" coords="423,324,454,325,483,383,425,384" shape="poly" className="highlighted" />
                            <area target="" alt="top1" title="Top 1 Zone" href="" coords="489,76,457,135,468,148,467,310,457,321,488,383,536,337,536,121" shape="poly" className="highlighted" />
                            <area target="" alt="top2" title="Top 2 Zone" href="" coords="71,76,100,136,93,144,95,309,100,325,71,380,40,352,33,363,4,333,5,118,32,95,46,104" shape="poly" className="highlighted" />
                        </map>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TicketsView
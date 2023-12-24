import React from 'react'
import Header from '../components/Header'

function ContactView() {
    return (

        <div>
            <Header />
            <div className="container-ccontact">
                <main className="row">
                    <div className="col left">
                        <div className="contactTitle">
                            <h2>Contact form</h2>
                            <p>Send your doubt, request or issue and We will answer you as son as possible</p>
                        </div>

                        <div className="contactInfo">
                            <div className="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-plus" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                    <path d="M15 6h6m-3 -3v6" />
                                </svg>
                                <div className="details">
                                    <span>Phone</span>
                                    <span>+34 600 000 000</span>
                                </div>
                            </div>

                            <div className="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                    <path d="M3 7l9 6l9 -6" />
                                </svg>
                                <div className="details">
                                    <span>Mail</span>
                                    <span>3x3.contact@gmail.com</span>
                                </div>
                            </div>

                            <div className="icons">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>
                                <div className="details">
                                    <span>Location</span>
                                    <span>X Street, Y Road, San Francisco</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col right">

                    </div>
                </main>
            </div>
        </div>
    )
}

export default ContactView
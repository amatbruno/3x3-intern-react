import React, { useState } from 'react';
import Header from '../components/Header'
import './ContactView.css'

function ContactView() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');

    const handleContact = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    subject,
                    description,
                }),
            });

            if (response.ok) {
                console.log("Form send correctly");
            } else {
                console.error("Error with the form send");
            }
        } catch (error) {
            console.error("Error with the form send", error);
        }
    };

    return (

        <div>
            <Header />
            <div className="container-contact">
                <main className="row">
                    <div className="col left">
                        <div className="contactTitle">
                            <h2>Contact form</h2>
                            <p>Send your doubt, request or issue and We will answer you as son as possible</p>
                        </div>

                        <div className="contactInfo">
                            <div className="iconGroup">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-plus" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                    <path d="M15 6h6m-3 -3v6" />
                                </svg>
                                <div className="details">
                                    <span>Phone</span>
                                    <span>+34 600 000 000</span>
                                </div>
                            </div>

                            <div className="iconGroup">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                                    <path d="M3 7l9 6l9 -6" />
                                </svg>
                                <div className="details">
                                    <span>Mail</span>
                                    <span>3x3.contact@gmail.com</span>
                                </div>
                            </div>

                            <div className="iconGroup">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                </svg>
                                <div className="details">
                                    <span>Location</span>
                                    <span>X Street, Barcelona</span>
                                </div>
                            </div>


                            <div className="socialMedia">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon2 icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon2 icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon2 icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                                    <path d="M16.5 7.5l0 .01" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon2 icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="col right">
                        <div className="mssgForm">
                            <div className="input-group half-width">
                                <input type="text" name="" required="required" onChange={(e) => setUsername(e.target.value)} />
                                <label>Your Name</label>
                            </div>
                            <div className="input-group half-width">
                                <input type="email" name="" required="required" onChange={(e) => setEmail(e.target.value)} />
                                <label>Your Email</label>
                            </div>
                            <div className="input-group full-width">
                                <input type="text" name="" required="required" onChange={(e) => setSubject(e.target.value)} />
                                <label>Subject</label>
                            </div>
                            <div className="input-group full-width">
                                <textarea required="required" onChange={(e) => setDescription(e.target.value)} />
                                <label>Description</label>
                            </div>
                            <div className="input-group full-width">
                                <button onClick={handleContact}>Send Message</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ContactView
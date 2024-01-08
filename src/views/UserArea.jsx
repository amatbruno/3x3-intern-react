import React from 'react'
import Header from '../components/Header'
import './UserArea.css'

function UserArea() {
    //PUT OPERATION DDBB

    return (
        <div className="App">
            <Header />
            <div className="user-area">
                <div className="banner">
                    <img src="https://img.freepik.com/premium-vector/linkedin-banner-futuristic-abstract-background-wireframe-style_193066-548.jpg?w=2000" alt="profile_banner" />
                </div>
                <div className="profile">
                    <div className="user-info">
                        <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="avatar" />
                        <h1>Real Name</h1>
                        <h2>Country</h2>
                        <h3>Age</h3>
                        <h4>Height</h4>
                    </div>
                    <div className="fill-data">
                        <p>Fill the required fields to complete your profile!</p>
                        <form>
                            <input type="text" placeholder='Type your name' name="name" required />
                            <input type="text" placeholder='Type your surname (Optional)' name="surname" />
                            <input type="text" placeholder='Type your username' name="username" required />
                            <input type="text" placeholder='Type your email' name="email" required />
                            <input type="number" placeholder='Type your age (Optional)' name="surname" />
                            <input type="text" placeholder='Type your height (Optional)' name="surname" />
                            <input type="submit" id="btnSend" value="Save Changes"/>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserArea
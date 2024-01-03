import React from 'react'
import Header from '../components/Header'
import './UserArea.css'

function UserArea() {
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
                        <h1>Name</h1>
                        <h2>Team name</h2>
                        <h3>Country</h3>
                        <h4>Age</h4>
                        <h5>Height</h5>
                    </div>
                    <div className="fill-data">
                        <p>Fill the required fields to complete your profile!</p>
                        <form>
                            <input type="text" placeholder='Type your name' name="name" />
                            <input type="text" placeholder='Type your surname' name="surname" />
                            <input type="text" placeholder='Type your username' name="username" />
                            <input type="text" placeholder='Type your email' name="email" />
                            <input type="text" placeholder='Type your age (Optional)' name="surname" />
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
import { React, useState } from 'react'
import Header from '../components/Header'
import './UserArea.css'

function UserArea() {
    //PUT OPERATION DDBB
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [username, setUsername] = useState('');
    const [country, setCountry] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/update-profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    surname,
                    username,
                    country,
                    age,
                    height
                }),
            });

            if (response.ok) {
                console.log("Update done correctly");
            } else {
                console.error("Error with the form send");
            }
        } catch (error) {
            console.error("Error with the form send", error);
        }
    };

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
                            <input type="text" placeholder='Type your name' name="name" required onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder='Type your surname (Optional)' name="surname" onChange={(e) => setSurname(e.target.value)} />
                            <input type="text" placeholder='Type your username' name="username" required onChange={(e) => setUsername(e.target.value)} />
                            <input type="text" placeholder='Type your country' name="country" required onChange={(e) => setCountry(e.target.value)} />
                            <input type="number" placeholder='Type your age (Optional)' name="age" onChange={(e) => setAge(e.target.value)} />
                            <input type="text" placeholder='Type your height (Optional)' name="height" onChange={(e) => setHeight(e.target.value)} />
                            <input type="submit" id="btnSend" value="Save Changes" onClick={handleUpdate}/>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserArea
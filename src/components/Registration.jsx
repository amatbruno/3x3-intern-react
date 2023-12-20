import React, { useState } from 'react';
import '../components/Registration.css'

function Registration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        try {
            if (password !== confirmPassword) {
                alert("Password doesn't match");
                return;
            }

            const response = await fetch('http://localhost:3001/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                console.log("User registraion correct");
            } else {
                console.error("Error with the user registration");
            }
        } catch (error) {
            console.error("Error with the user registration", error);
        }
    };


    return (
        <div className="sign-up-container">
            <form>
                <h1>REGISTER</h1>
                <span>Register with your email and password to discover all the features!</span>
                <input type="text" placeholder='Introduce your name' onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Introduce your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Introduce your password' onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder='Confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type='button' onClick={handleRegister}>Sign In</button>
            </form>
        </div>
    )
}

export default Registration
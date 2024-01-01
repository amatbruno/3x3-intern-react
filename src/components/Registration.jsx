import React, { useState } from 'react';
import '../components/Registration.css';

function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    return crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    });
}

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            if (password !== confirmPassword) {
                alert("Password doesn't match");
                return;
            }

            // Hash the password before sending it to the server
            const hashedPassword = await hashPassword(password);

            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password: hashedPassword,
                }),
            });

            if (response.ok) {
                console.log("User registration correct");
                // navigate('/userarea');
                // console.log("Navigated to /userarea");
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
                <input type="text" placeholder='Introduce your username' onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder='Introduce your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Introduce your password' onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder='Confirm your password' onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type='button' onClick={handleRegister}>Sign Up</button>
            </form>
        </div>
    );
}

export default Registration;

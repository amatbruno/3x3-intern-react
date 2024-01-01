import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

// Include the hashPassword function here or import it from the correct location
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Fetch the hashed password from the database based on the email
            const response = await axios.post('http://localhost:3001/login', { email });
            const hashedPasswordFromDB = response.data.hashedPassword;

            // Hash the input password for comparison
            const hashedInputPassword = await hashPassword(password);

            // Compare the hashed input password with the hashed password from the database
            if (hashedInputPassword === hashedPasswordFromDB) {
                console.log('Login successful');
            } else {
                console.log('Incorrect credentials');
            }
        } catch (error) {
            console.error('Error finding user', error);
        }
    };

    return (
        <div className="sign-in-container">
            <form>
                <h1>LOGIN</h1>
                <span>Enter your email and password to access your services</span>
                <input type="text" placeholder='Introduce your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Introduce your password' onChange={(e) => setPassword(e.target.value)} />
                <button type='button' onClick={handleLogin}>Sign In</button>
            </form>
        </div>
    );
}

export default Login;
